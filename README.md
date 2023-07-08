# web-development
Web development bootcamp course on Udemy by Dr. Angela Yu
- [Udemy Link](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
- [Free Legacy Course Link](https://appbrewery.com/courses/legacy-complete-web-development-course/lectures/46570088)

<hr />

## Useful Links
- [Mozilla Developer Resources](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
    - Has resources on HTML tags 
    - Also has resources on HTML, CSS, JS, etc.

<hr />

## Notes on HTML
##### Short cut for writing the **HTML boilerplate**
    - Open a blank HTML file like "index.html"
    - ! and enter on first selection
    - boiler plate code is written for your page

##### Commonly Useful tags

- `<html>`: Defines the root element of an HTML document.
   Syntax: `<html>...</html>`
   Output: N/A (This is the top-level element and does not render any visible content.)

- `<head>`: Contains metadata about the HTML document.
   Syntax: `<head>...</head>`
   Output: N/A (The content inside the `<head>` tag is not visible in the browser.)

- `<title>`: Specifies the title of the HTML document, displayed in the browser's title bar or tab.
   Syntax: `<title>Page Title</title>`
   Output: N/A (The title appears in the browser's title bar or tab.)

- `<body>`: Represents the main content of an HTML document.
   Syntax: `<body>...</body>`
   Output: N/A (The content inside the `<body>` tag is displayed in the browser.)

- `<h1>` to `<h6>`: Defines headings of different levels (from highest to lowest importance).
   Syntax: `<h1>Heading</h1>` to `<h6>Heading</h6>`
   Output: Heading (The text appears as a heading with varying sizes.)

- `<p>`: Represents a paragraph of text.
   Syntax: `<p>Paragraph Text</p>`
   Output: Paragraph Text (The text appears as a block of paragraph.)

- `<a>`: Creates a hyperlink to another web page or resource.
   Syntax: `[Link Text](https://example.com)`
   Output: [Link Text](https://example.com) (The text appears as a clickable link.)

- `<img>`: Embeds an image into the HTML document.
   Syntax: `![Image Description](image.jpg)`
   Output: N/A (The image specified by the `src` attribute is displayed.)

- `<ul>`: Defines an unordered list.
   Syntax:

- `<div>`: Represents a division or section of the HTML document.
   Syntax:
   ```
   <div>
   Content
   </div>
   ```
   Output: N/A (The content inside the `<div>` tag is treated as a separate block.)

<hr />

## Notes on CSS

- [A complete CSS Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Colours:
   - [Individual Color Codes](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) 
   - [Color pallet combination codes](https://colorhunt.co/palettes/popular)
- Fonts:
   - [Google Fonts](fonts.google.com)
- Chrome Developer Tools: Ctrl + Shift + I or
   - Open chrome 
   - : (Three dots) on the side 
   - More Tools 
   - Developer Tools
- The CSS Box Model 
   - margin:
   - border: "border: 30px solid black"
   - padding:
   - create a box with with and contect with the following: "<div>...</div>
   - "Pesticide for Chrome" is a chrome extension for development and understanding divs and alignment
   - 6.4-Motivation-Meme-Project: is a good project to align things in the center for a website using percentages.
- In Cascade styling in CSS (Cascading Style Sheets) - Ref. Section 7
   - Cascading hierarchy is based on the following 4 things:
      1. Position: Lower position styling overwrites the higher
      2. Specificity: ID selector > attribute selector > class selector > element 
      3. Type: 
         - External styling 
         - Internal styling 
         - Inline styling (usually applied at an element level, it overwrites higher level of styling)
      4. Importance
         - "color: red;"
         - "color: green !important;"

