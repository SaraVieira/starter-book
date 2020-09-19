# Book Starter

A starter built with gatsby to help you create books with ease.

- 📖 Create Book from markdown files
- 🖼 Generate PDF with Light and Dark Mode
- 📚 Generates Epub file
- 👩‍💻 Creates a preview site

[PDF Light Example](./book/book-light.pdf)

[PDF Dark Example](./book/book-dark.pdf)

[Epub Example](./book/book.epub)

[Website Example](https://wizardly-snyder-c98440.netlify.com/) (add `?theme=dark` to preview dark version)

## How to use

1. First git clone and cd into the folder

```bash
git clone git@github.com:SaraVieira/starter-book.git my-book && cd my-book
```

2. Edit your book in the `book.md`
3. Set you book properties in `bookInfo.js`
4. Run `yarn build`

   4.1. You can also run `yarn build:site` to build just the preview site

   4.2. Or run `yarn build:book` for the PDF and Epub files

5. To get the .mobi file download the [Kindle Previewer](https://kdp.amazon.com/en_US/help/topic/G202131170) and drag your .epub file and it creates a kindle compatible file.
6. Profit??

## FAQ

### How can I edit the CSS?

The CSS is located in [./src/styles/style.scss](./src/styles/style.scss) and you can edit it there. At the bottom you will see all the styles specific for the dark version.

### How can I change the Prism theme?

I import the prism theme in [./src/pages/index.js](./src/pages/index.js) and in there you can use any theme or make your own and use it by importing. I made a tool you can see [here](http://prism.dotenv.dev/) that helps you make your VSCode theme into a prism theme easily.

### The chapters are screwed up in my version

I use a really HUUUUGE hack to get them, I go through every H1 created by the markdown file and make that into a chapter so I can only recognize H1's as chapters at least until I find a better way :(
If you want to try and fix that the code is at [./generate-book/epub.js](./generate-book/epub.js).

## Why?

I built this in order to be able to publish a book I wrote and I think it may be useful for someone so I made it open source.

## Books using this:

- [Opinionated Guide to React](http://opinionatedreact.com/)

Let me know if you are using this to make your book :)

---

Any issues please make a PR or file a bug

Licensed under the MIT license
