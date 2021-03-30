> These instructions assume you have [Node](https://nodejs.org) installed in your computer

- First git clone and cd into the folder

```bash
git clone git@github.com:SaraVieira/starter-book.git my-book && cd my-book
```

2. Edit your book in the `book.md`

   All major semantic elements are supported including code blocks with syntax highlighting. Please refer to [the Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you have any doubts about markdown

3. Set you book information in `bookInfo.js`. This includes screenshots, your name, the cover and a lot more.

This is the default data stored in that file:

```js
module.exports = {
  title: "My Book",
  author: "Jane Doe",
  subject: "Good Book, best book ever",
  keywords: ["things", "stuff"],
  // relative to the generate-book directory
  cover: "../static/cover.png",
  localURL: "http://localhost:8000",
  siteUrl: "http://localhost:8000",
  social: {
    twitter: "test",
  },
  PWA: {
    backgroundColor: `#ffffff`,
    themeColor: `#663399`,
  },
};
```

4. Run `yarn install`
5. Run `yarn build`

   5.1. You can also run `yarn build:site` to build just the preview site

   5.2. Or run `yarn build:book` for the PDF and Epub files

6. To get the .mobi file download the [Kindle Previewer](https://kdp.amazon.com/en_US/help/topic/G202131170) and drag your .epub file and it creates a kindle compatible file.
7. Profit??
