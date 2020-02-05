const footerTemplate =
  '<style>@font-face {font-family: "Merriweather"; font-style: normal; font-weight: 400; font-display: swap; src: local("Merriweather Regular"), local("Merriweather-Regular"), url(./merryi.woff2) format("woff2");}</style><div style="margin: 0 auto;"><h1 style="color: #000; font-size: 6px; text-align: center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></h1></div>';

const epubCSS = `
  body {color: #000; font-family: "Helvetica";}
  .alert, .title {display: none;}
  .menu-toggle,
  .title,
  .alert {
    display: none;
  }
  pre,
  .toc {
    page-break-inside: avoid;
  }`;

module.exports = {
  footerTemplate,
  epubCSS
};
