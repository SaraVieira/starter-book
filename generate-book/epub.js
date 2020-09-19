const { epubCSS } = require("./templates");
const fs = require("fs");
const path = require("path");
const Epub = require("epub-gen");
const info = require("../bookInfo");
const cheerio = require("cheerio");

const savePath = (ext) => path.join(__dirname, "../book/book." + ext);
const html = fs.readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf8"
);

const $ = cheerio.load(html);
const chapters = [];

$("h1").each(function (i, elem) {
  chapters.push({
    data: $(elem).nextUntil("h1").toArray().map($.html).join(""),
    title: $(elem).text(),
  });
});

const option = {
  title: info.title,
  verbose: true,
  author: info.author,
  cover: path.join(__dirname, info.cover),
  customHtmlTocTemplatePath: path.join(__dirname, "./toc.html"),
  css: epubCSS,
  content: chapters,
};

new Epub(option, savePath("epub"));
