> These instructions assume you have [Node](https://nodejs.org) installed in your computer

- First `git clone` and move into the new folder

```bash
git clone git@github.com:SaraVieira/starter-book.git my-book && cd my-book
```

- Edit your book in the `book.md`

  All major semantic elements are supported including code blocks with syntax highlighting. Please refer to [the Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you have any doubts about markdown.

- Set you book information in `bookInfo.js`. This includes screenshots, your name, the cover and a lot more.

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
  // here you can place your social links
  social: {
    twitter: "test",
  },
  // Each book website is automatically as progressive web app and this allows you to change the colors
  PWA: {
    backgroundColor: `#ffffff`,
    themeColor: `#663399`,
  },
};
```

- Run `npm install`

- Test your website locally by running: `npm start`.

This will open a server on `http://localhost:8080` where you can preview the book as you write it.

When you are done you can run

- Run `npm run build`

> Important! For the build to work you need to have `npm start` running because that's how the PDF is built, it connects to the local server

You can also build just the website with `npm run build:site` or just the book with `build:book`
