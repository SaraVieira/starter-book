import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prism-theme-night-owl";
// Use any from here: https://www.npmjs.com/package/prism-themes
// import "prism-themes/themes/prism-vs.css";
import "./../styles/style.scss";
import {
  imageRenderer,
  headingRenderer,
  RootRenderer,
  SmallRootRenderer,
} from "../utils/renderers";
import info from "../../bookInfo";

if (typeof window !== "undefined") {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const theme = urlParams.get("theme");

  if (theme === "dark") {
    document.getElementsByTagName("body")[0].classList += "dark";
  }
}

function codeBlock({ value, language }) {
  if (!value) return null;

  const lang = language || "bash";
  var html = Prism.highlight(value, Prism.languages[lang]);
  var cls = `lang-${lang}`;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const markdownBook = data.markdownRemark;
  const renderers =
    process.env.GATSBY_SCRAPPER === "1"
      ? {
          heading: headingRenderer,
          root: SmallRootRenderer,
          image: imageRenderer,
        }
      : {
          code: codeBlock,
          heading: headingRenderer,
          root: RootRenderer,
          image: imageRenderer,
        };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={info.title} />
      <ReactMarkdown
        renderers={renderers}
        source={markdownBook.rawMarkdownBody}
      />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark {
      rawMarkdownBody
    }
  }
`;
