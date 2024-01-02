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

<hr />

## Notes on JavaScript

Java : Javascript :: car : carpet

<hr />

## Notes on Node.JS & Express (section 22 to 24)
Node vs Express 
- We need a Framework for backend. 
- Most popular one is Node.js
- However, Node.js is not a framework, it is a runtime environment. 
- Hence it allows us to run javascript on the computer instead of browser
- Express is a framework that allows us to create backend for our website

Install node.js 
- install node.js from -> https://nodejs.org/en
- Restart Computer 
- Open terminal 
- try running>> node -v
- Read documentation here -> https://nodejs.org/docs/latest/api/


Install Node.JS packages **NPM Library**
- go to npm library -> https://www.npmjs.com/
- explore sillyname package -> https://www.npmjs.com/package/sillyname
- **Steps**
   - Go to the respected folder <br>
   cd "Path"
   - Initialize npm <br>
   npm init
   - Create Lisence Json <br>
   Fill out the Json values (you can keep all the values as default)
   - install the package **sillyname** <br>
   >>npm install sillyname <br>
   OR  <br>
   >>npm i sillyname other-names
   - Note that package.json and package-lock.json are created

- **Short cut**
   - Go to the path in terminal 
   - npn init -y
   - npm i sillyname 
   - Update package.json with  "type" : "module",
   
CJS to ESM for node > v12
- Now we use ECMAScript modules. This means that now we could use 
import instead of require
Ref -> https://github.com/iVibudh/web-development/blob/main/23-Node-JS/2.3%2BNPM/index.js

- It also improves tree shaking.
- Spets to activate ESM:
   - add "type" : "module" in package.json
   - use import, instead of require



<hr />

## Notes on Express (Section 24)

Check all port statues:
- Windows <br>
netstat -a <br>
netstat -ano | findstr "LISTENING'
- Mac/Linux <br>
sudo lsof -i -P -n | grep LISTEN

Http Vocab:
- GET: Retrieves data from a specified resource without modifying it.
- POST: Sends data to a server to create a new resource or process a data
- PUT: Replaces all current representations of the target resource with the request payload.
- PATCH: Partially modifies the target resource with specified changes.
- DELETE: Removes the specified resource from the server.

Tips for autostart:
- nodemon autumatically restarts the server when it detects that there are any changes to the code
- just use "nodemon" instead of "node", when you are starting the server
- install nodemon globally <br>
npm install -g nodemon



**HTTP Response Status Codes**
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
1. Informational responses ( 108 - 199 )
2. Successful responses ( 200 - 299)
   - 200 OK
   - 201 Create 
3. Redirection messages ( 300 - 399 )
4. Client error responses ( 400 - 499 )
   - 404 Not Found
5. Server error responses ( 500 - 599)
The status codes listed below are defined by RFC 9110 2.
Ref -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


**There are 4 types of MiddleWare**
- Pre-processing (eg. body-parser)
- Logging (eg. morgan)
- Error handling
- Authentication