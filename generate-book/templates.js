const footerTemplate =
  '<div style="margin: 0 auto 10px auto;"><h1 style="color: #ddd; font-family: Helvetica; font-size: 8px; text-align: center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></h1></div>';

const footerDark =
  '<style>* {-webkit-print-color-adjust: exact; color: #3B5C77; background: rgb(32, 40, 51);}</style><div style="margin: 0 auto;"><h1 style="font-family: Helvetica, serif; font-size: 8px; text-align: center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></h1></div>';

const epubCSS = `
  @font-face {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: normal;
    src: url("./Helvetica.ttf");
  }
  body {color: #000; font-family: "Helvetica", sans-serif;}
  .alert, .title {display: none;}
  .menu-toggle,
  .title,
  .alert {
    display: none;
  }
  pre,
  .toc {
    page-break-inside: avoid;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: #464646;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #f7f7f7;
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #f7f7f7;
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: #f7f7f7;
  }
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.variable {
    color: #464646;
    
  }
  .token.operator {
    color: #464646;
    
  }
  .token.keyword {
    color: #999999;
    
  }
  .token.number {
    color: #999999;
    
  }
  .token.constant {
    color: #999999;
    
  }
  .token.attr-name {
    color: #999999;
    
  }
  .token.builtin {
    color: #868686;
    
  }
  .token.string {
    color: #868686;
    
  }
  .token.char {
    color: #868686;
    
  }
  .token.tag {
    color: #7C7C7C;
    
  }
  .token.deleted {
    color: #7C7C7C;
    
  }
  .token.selector {
    color: #747474;
    
  }
  .token.changed {
    color: #747474;
    
  }
  .token.inserted {
    color: #8E8E8E;
    
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  `;

module.exports = {
  footerDark,
  footerTemplate,
  epubCSS,
};
