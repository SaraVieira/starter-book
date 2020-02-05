# Gatsby Starter Book

A gatsby starter focused on simplicity to help you create books.

- 📖 Create Book from markdown files
- 🖼 Generate PDF and Epub

[PDF Example](./book/book.pdf)

[Epub Example](./book/book.epub)

## How to use

1. First git clone and cd into the folder

```bash
git clone git@github.com:SaraVieira/gatsby-starter-book.git my-book && cd my-book
```

2. Edit your book in the `book.md`
3. Set you book properties in `bookInfo.js`
4. Run `yarn build` (for netlify please use `yarn build:site`)
5. To get the .mobi file download the [Kindle Previewer](https://kdp.amazon.com/en_US/help/topic/G202131170) and drag your .epub file and it creates a kindle compatible file.
6. Profit??

## Why?

I built this in order to be able to publish a book I wrote and I think it may be useful for someone so I made it OSS.

## Where can I edit the syntax highlight theme?

You can change it in the [`pages/index.js`](https://github.com/SaraVieira/gatsby-starter-book/blob/master/src/pages/index.js#L15)

## Why not a theme?

I want you to be able to edit everything as it will be your book so I think this workflow makes sense

---

Any issues please make a PR or file a bug
