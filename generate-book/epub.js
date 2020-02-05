const { epubCSS } = require("./templates");
const fs = require("fs");
const path = require("path");
const Epub = require("epub-gen");
const info = require("../bookInfo");

const savePath = ext => path.join(__dirname, "../book/book." + ext);
const html = fs.readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf8"
);

const option = {
  title: info.title,
  verbose: true,
  author: info.author,
  cover: path.join(__dirname, info.cover),
  customHtmlTocTemplatePath: path.join(__dirname, "./toc.html"),
  css: epubCSS,
  content: [
    {
      data: html
    }
  ]
};

new Epub(option, savePath("epub"));
