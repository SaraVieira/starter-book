### How can I edit the CSS?

The CSS is located in [./src/styles/style.scss](https://github.com/SaraVieira/starter-book/src/styles/style.scss) and you can edit it there. At the bottom you will see all the styles specific for the dark version.

### How can I change the theme in the Code Blocks?

For this I use prism and I import the theme in [./src/pages/index.js](https://github.com/SaraVieira/starter-book/src/pages/index.js) and in there you can use any theme or make your own and use it by importing. I made a tool you can see [here](http://prism.dotenv.dev/) that helps you make your VSCode theme into a prism theme easily.

### The chapters are screwed up in my version

I use a really HUUUUGE hack to get them, I go through every H1 created by the markdown file and make that into a chapter so I can only recognize H1's as chapters at least until I find a better way :(
If you want to try and fix that the code is at [./generate-book/epub.js](https://github.com/SaraVieira/starter-book./generate-book/epub.js).

Another way is to generate them using [Calibre](https://calibre-ebook.com/).
To do this open Calibre with your book, click in edit book:

![Edit book](./images/edit.png)

This will open a new window and in this new window click on the "Edit Table of Contents" Button

![Edit Table of Contents](./images/toc.png)

Another window will open where you can click on "Generate from all Headings":

![Generate from all Headings](./images/generate.png)

Once this is done you can return to the main window of the app and get your new EPUB file by clicking on the link that says "Click to Open" in the path list item:

![Open Path](./images/open.png)

## How can I add outline items to the PDF?

I could not find a way to do this with code so I ended up buying a software called [PDFOutliner](https://www.onekerato.com/pdfoutliner.html) but this is far from perfect as it's a Mac only app so any help would be super appreciated.

To use the software open it up in your mac, click open and locate the PDF version of the book and after that you click on "Auto TOC"

![PDFOutliner UI](./images/1.png)

Once created save the file and you should have a new Outline created.
