import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { MenuToggle } from "../components/MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export const headingRenderer = ({ children: reactChildren, level }) => {
  var children = React.Children.toArray(reactChildren);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + level, { id: slug }, children);
};

export const imageRenderer = (props) => {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.alt}</figcaption>
    </figure>
  );
};

export const RootRenderer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const TOCLines = children.reduce((acc, { key, props }) => {
    // Skip non-headings
    if (key.indexOf("heading") !== 0) {
      return acc;
    }
    let indent = "";
    for (let idx = 1; idx < props.level; idx++) {
      indent = `${indent}  `;
    }
    const value = props.children[0].props.value;
    const link = value.toLowerCase().replace(/\W/g, "-");
    return acc.concat([`${indent}* [${value}](#${link})`]);
  }, []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.div initial={false} animate={open ? "open" : "closed"}>
      <motion.div
        className="background"
        animate={open ? "open" : "closed"}
        variants={sidebar}
      />
      <MenuToggle toggle={() => setOpen((o) => !o)} />
      <motion.aside
        variants={variants}
        animate={open ? "open" : "closed"}
        className="aside"
        onClick={() => setOpen(false)}
      >
        <ReactMarkdown source={TOCLines.join("\n")} />
      </motion.aside>
      <div className="toc">
        <ReactMarkdown source={TOCLines.join("\n")} />
      </div>
      <div>{children}</div>
    </motion.div>
  );
};

export const SmallRootRenderer = ({ children }) => {
  const TOCLines = children.reduce((acc, { key, props }) => {
    // Skip non-headings
    if (key.indexOf("heading") !== 0) {
      return acc;
    }
    let indent = "";
    for (let idx = 1; idx < props.level; idx++) {
      indent = `${indent}  `;
    }
    const value = props.children[0].props.value;
    const link = value.toLowerCase().replace(/\W/g, "-");
    return acc.concat([`${indent}* [${value}](#${link})`]);
  }, []);

  return (
    <>
      <ReactMarkdown source={TOCLines.join("\n")} />
      <div>{children}</div>
    </>
  );
};
