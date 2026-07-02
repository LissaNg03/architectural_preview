<!-- @format -->

/\*_ @format _/

//NODE JAVASCRIPT
//WHAT IS JAVASCRIPT FIRST = JS IS A LANGUAGE ORIGINALLY CREATED TO CREATE DYNAMIC AND INTERACTIVE WEBSITES, IT DIRECTLY RUNS IN THE BROWSER AND IS POWERED BY V8 ENGINE WHICH COMPILES JS DIRECTLY INTO MACHINE CODE FOR FAST EXECUTION, V8 ENGINE (C++ WRITTEN) RUNS ONLY ON BROWSERS.

//TO ALLOW JS TO BE RUN OUTSIDE A BROWSER AND RUN INSIDE A COMPUTER LIKE OTHER LANGUAGES, OR RUNNING IT IN THE SERVER-SIDE, THEN NODE JS GOT YOU FOR THAT.

//////////////////////////////////////////////

// const name = "Lisakhanya";

// console.log(name); //SINCE THERE'S NO BROWSER FOR DEVELOPER OPTIONS HERE, WE USE THE TERMINAL AND EXECUTE THE CODE BY RUNNING "node filename", E.G > node index

// const greet = (name) => console.log(`Hello ${name}`);

// greet("Lissa");

///////////////////////////////////////////////////////////////////////////////////
//GLOBAL OBJECT = KINDA LIKE THE WINDOW OBJECT IN BROWSER, BUT HAS ACCESS TO PROPERTIES SUCH AS console, (**dirname, **filename, not global but local to one module) Buffer, setTimeout(), setInterval(); etc, NOT DOM, IT ALSO HAS DIFFERENT SCOPE RULES such as MODULAR files, VARIABLES ARE NOT AUTOMATICALLY GLOBAL UNLESS EXPLICITLY MADE GLOBAL WITH global.var, each file is its own module.

//MODULAR FILE MEANING:

// (function (exports, require, module, **filename, **dirname) {
// // your code here
// });

//EACH FILE UNDER THE HOOD IS WRAPPED IN THIS FUNCTION, the properties in the parameters are NOT global but local to the current file.
////////////

// const name = "Lisakhanya";
// global.console.log(name); //but you dont have to write global., just like for browser window object, you dont have to write the window.

//THESE ARE FEW OF ALL GLOBALLY AVAILABLE PROPERTIES
// global.setTimeout(() => {
// global.console.log("RUN Timeout");
// }, 2000);

// global.setInterval(() => {
// global.console.log("RUN Interval");
// }, 1000);

// global.setInterval(() => {
// global.console.log("RUN Interval 2");
// }, 1500);

////
//ACCESSING THE CURRENT MODULE'S PARAMS LIKE **filename, **dirname
// console.log(**dirname); //SHOWS CURRENT DIRECTORY NAME
// console.log(**filename); //SHOWS CURRENT FILENAME

///////////////////////////////////////////////////////////////////////////////
//MODULES & REQUIRE = EACH FILE IS A MODULE (HAS ITS OWN SCOPE), with access to local params such as (exports, require, module, **filename, **dirname), but to access variables in another file from another file, you use require("dirname");
//NB: WHEN YOU REQUIRE() A CERTAIN FILE, THAT REQUIRE() LINE EXECUTES THAT REQUIRED FILE, THEN IF ASSIGNED TO A VAR, RETURN THE EXPORTED VALUES:

//secFile:
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const secFile = require("./secFile"); //THIS WILL EXECUTE THE REQUIRED FILE, THEN THEREFORE log numbers, but secFile will still return {} empty object, coz secFile doesn't export any variables

// console.log(secFile); //{}
//\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*** \*/
//secFile:
// const numbers = [1, 2, 3, 4, 5];
// const names = ["Lissa", "Ngwendu"]
// console.log(numbers);
// module.exports = numbers

//console.log(secFile);//returns numbers
//NB: YOU CAN EXPORT MUTLIPLE VALUES TO AS AN OBJECT
// module.exports = {numbers:numbers,}

// console.log(secFile.names);
// console.log(secFile.numbers);

//NB: OBJECT DESTRUCTURE THE REQUIRING
// const { names, numbers } = require("./secFile");

// console.log(names); //array of names
// console.log(numbers); //array of numbers
// console.log(myName);

//////////
//REQUIRING OPERATING SYSTEM MODULE, getting things like, os userInfo, uptime, hostname etc.

//THE OPERATING SYSTEM NODE MODULE

// const os = require("os");

// // console.log(os.platform());
// // console.log(os.userInfo());
// // console.log(os.networkInterfaces());
// // console.log(os.uptime());
// // console.log(os.hostname());
// console.log(os.homedir());

//THE FILE SYSTEM NODE MODULE, (reading, writing & deleting files, directories);

//[READING FILES] = you import / require the fl module first, then use the required object's inner readFile() like this: fs.readFile("filePath", "encoding", callback), since this is is obviously ASYNCHRONOUS (i.e it takes some time to finish, but code won't wait for it to finish, it's NON-BLOCKING) when it's done reading the file, it'll call the callback function

// const fs = require("fs");

// fs.readFile("./docs/blog1.txt", "utf-8", (err, data) => {
// err && console.error(err.err);
// data && console.log(data); //THIS RETURNS A BUFFER
// });
//...A Buffer is a raw binary representation of data, and Node.js returns it because it doesn’t assume the file is text. So you can convert it to text/string since you know its a string:: Text (UTF-8, ASCII, etc.), Images (PNG, JPG), Videos, PDFs

///////////////////////////////////////////////////////////////
//[WRITING FILES] = You first require the fs module, use the .writeFile("filePath", "string to write", callback);
// IF THE FILE YOU'RE WRITING INTO ALREADY EXISTS, THE TEXT YOU ADD THERE WILL REPLACE WHATEVER TEXT IS ALREADY THERE
//IF IT DOESN'T EXIST, IT'LL BE CREATED AND WRITTEN INTO

// const fs = require("fs");

// fs.writeFile("./docs/blog1.txt", "HELLO LISAKHANYA", () => {
// console.log("file written");
// });

// fs.writeFile("./docs/blog2.txt", "HELLO LISAKHANYA AGAIN", () => {
// console.log("file written");
// });

//CREATING 10 FILES QUICK, VERY DANGEROUS
// for (let i = 0; i < 10; i++) {
// fs.writeFile(`./docs/blog${i + 1}.txt`, `HELLO LISAKHANYA ${i + 1}`, () => {
// console.log("file written");
// });
// }

///////////////////////////////////////////////////////////////////
//[CREATING DIRECTORIES (folders) - (mkdir, rmdir)] = require fs obvy, then fs.mkdir("filepath/folderName", callback);

// const fs = require("fs");

// fs.mkdir("./assets", (err) => {
// err && console.log(err);
// console.log("folder created");
// }); //WILL CREATE THE FOLDER, BUT WILL GIVE AN ERROR IF THE FOLDER ALREADY EXISTS
//BEST TO CHECK IF THE FOLDER EXISTS OR NOT FIRST, BEFORE CREATING THE FOLDER, using the existsSync(), which is a SYNCHRONOUS method i.e CODE-BLOCKING but very quick therefore efficient::

// if (!fs.existsSync("./assets")) {
// fs.mkdir("./assets", (err) => {
// err && console.log(err);
// console.log("folder created");
// });
// } else {
// // console.log("folder already exists");
// fs.rmdir("./assets", (err) => {
// err && console.log(err);
// console.log("folder removed");
// });
// }
//fs.existsSync() checks the folder and returns true if it exists, so better to use the ! reverser

////////////////////////////////////////////////////////////////
//[DELETING FILES] = important to check if the file you wanna delete exists first, using the existsSync() method, also works for files, method to delete is fs.unlink("filepath.extn")

// const code =
// "const thirdFileTxt = 'Programmatically written code'; \nmodule.exports = thirdFileTxt;";

// let importedData;

// if (fs.existsSync("./thirdFile.js")) {
// fs.unlink("./thirdFile.js", () => {
// console.log("file deleted");
// }); //UNLINKING FILE
// } else {
// fs.writeFile("./thirdFile.js", code, () => {
// console.log("file written");
// const runFile = require("./thirdFile");
// importedData = runFile;
// console.log("IMPORTED DATA: " + importedData);
// });
// }

////////////////////////////////////////////////////////////////////////
//MORE NODE MODULES::
// readFile → read data
// writeFile → create/overwrite
// appendFile → add data
// unlink → delete file
// mkdir → create folder
// rm → delete folder/file
// stat → inspect file
// rename → move/rename
// streams → handle large data efficiently

//[APPENDFILE] = adding more text to a file instead of replacing existing one

// const fs = require("fs");

// fs.writeFile("./writefile.txt", "Hello World", (err) => {
// err && console.error(err);
// console.log("file written");
// });

///////////////////
//READING AND COPYING AND WRITING TO ANOTHER FILE

// fs.readFile("./binary_numbers.txt", "utf-8", (err, data) => {
// err && console.log(err);
// console.log("file read");
// writeToFile(data);
// });

// function writeToFile(data) {
// fs.appendFile("./writefile.txt", data, (err) => {
// err && console.error(err);
// console.log("file written");
// });
// }

///////////////////////////////////////////////
//[STREAMS] = To start using data, before it has finished loading. WHEN ACQUIRING LARGE AMOUNTS OF DATA WHICH TAKE SOME TIME TO READ INSTANTLY, IT'S BETTER TO USE STREAMS;
//First use the fs node module to create a readStream i.e const readStream = fs.createReadStream("path", {encoding});
//Second, you use the event listener on() on the readStream object created, then event listens to the 'data' event, which is the chunk of data read, with a callback that's called on every 'chunk of data read and returned;
//In the stream reading line, you can add encoding and Max Size Per Chunk in the second object arg, {encoding:"", highWaterMark:1024}

// const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog1.txt", {
// // encoding: "utf-8",//character encoding
// // highWaterMark: 1024,// Maximum size per chunk
// });

// readStream.on("data", (chunk) => {
// console.log("-----------------NEW CHUNK--------------------");
// console.log(chunk);
// });

////////////////
//[WRITING STREAM] = continuously writing into a file kinda like a repeated appendFile(), but commonly used to stream and read and write, where you readStream() and writeStream into another file;

// const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog1.txt", {
// encoding: "utf-8",
// highWaterMark: 1024, //MAX CHUNK SIZE (bytes)
// }); //OPENS FILE AND READ DATA BIT BY BIT;

// const writeStream = fs.createWriteStream("./docs/blog2.txt"); //OPENS OR CREATE FILE AND WRITE INTO IT

// // readStream.on("data", (chunk) => {
// // // console.log("----------NEW CHUNK----------");
// // // console.log(chunk);
// // // writeStream.write("\n\n-------------NEW CHUNK-------------\n");
// // writeStream.write(chunk); //WRITE
// // });

// ////////////
// //[PIPING] = DOING THE EXACT SAME THING ABOVE IN ONE LINE USING .pipe();

// readStream.pipe(writeStream); //READS THE DATA IN readStream and continuously pipe it into writeStream

///////////////////////////////////////////////
//CLIENTS & SERVERS = CREATING A SERVER TO ACTIVELY LISTEN TO CLIENT REQUESTS.
//FIRST REQUIRE THE HTTP MODULE
//THEN CREATE A SERVER CONSTANT
//THE SERVER CREATED HAS A CALLBACK THAT IS CALLED WHENEVER A REQUEST IS RECEIVED BY THE SERVER, (REQ,RES) => {}, THE REQ PARAM IS AN OBJECT CONTAINING INFO BOUT THE REQ SUCH AS URL,REQ TYPE, ETC, RES OBJ CAN BE USED TO SEND RESPONSES
//

// const http = require("http"); //http node module

// const server = http.createServer((req, res) => {
// console.log("REQUEST MADE");
// }); //server runs callback on every request received

// //REQUEST IS CREATED IN CODE, BUT ISN'T REALLY DOING ANYTHING UNTIL THE LISTEN METHOD IS USED TO MAKE THE SERVER ACTIVELY LISTEN FOR INCOMING REQUESTS

// server.listen(3000, "localhost", () => {
// console.log("Listening on port 3000...");
// });

//NB: WHEN YOU RUN THE SERVER AND LISTEN, WHEN YOU RUN THE FILE IN THE TERMINAL, THE TERMINAL WILL ACTIVELY 'RUN' LISTENING
//WHEN YOU VISIT THE localhost:3000 IN YOUR BROWSER, A REQUEST IS SENT TO THIS SERVER YOU CREATED, BUT THERE'S NO RESPONSE YET EXCEPT FOR THE CONSOLE.LOGS(), AND THESE CONSOLE LOGS ARE NOT ON THE BROWSER BUT RUN IN THE BACK END, SO THEY ARE IN THIS FILE'S TERMINAL

//////////////////////////////////////////////////////
//[REQUESTS & RESPONSES] = SENDING A RESPONSE BACK TO THE BROWSER
// const http = require("http");

// const server = http.createServer((req, res) => {
// console.log(req.url, req.method); //returns the request url, which excludes the domain i.e: [http://youtube.com] <<excluded, returns:/index.html.....and request method:GET

// //FIRST YOU NEED TO SET RESPONSE HEADERS (content type), which tell the browser what kinda data it's getting back, text, html, json etc, can even set cookies

// // res.setHeader("Content-Type", "text/plain"); //SETS CONTENT-TYPE TO PLAIN TEXT, text/html, application/json, image/png
// // res.write("Hello there"); //PLAIN TEXT RETURNED

// // res.end("\nDone"); //RESPONSE IS MUST BE ENDED, SO BROWSER KNOWS IT RECEIVED FULL RESPONSE AND STOP LOADING, Response is complete, you can stop waiting, if response is not ended it'll stay open and browser'll keep loading, also res.end("ALSO SEND FINAL MESSAGE")

// res.setHeader("Content-Type", "text/html");

// res.write("<head> <link rel='stylesheet' href='#'></head>"); //WHEN YOU WRITE THE HEADER, IT'LL ACTUALLY REPLACE THE HEADER OF THE HTML IN THE BROWSER, THIS IS HTML RETURNED HERE
// res.write("<p>Hello World </p>");
// res.end(); //VERY IMPORTANT TO END A RESPONSE
// });

// server.listen(3001, "localhost", () => {
// console.log("listening on port 3000...");
// });

//IF YOU'D CHECK NETWORK HEADERS IN Developer Options: you'd find: http://localhost:3001/, Request Method: GET, Status Code: 200 OK, Remote Add, Content-Type, etc

//[RETURNING WEBPAGES] = READING AN HTML DOCUMENT USING THE FS MODULE, AND WRITING THE READ DATA TO THE BROWSER AS RESPONSE

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
// res.setHeader("Content-Type", "text/html");
// console.log("REQ URL: " + req.url);
// let path = "./frontend/";
// //USING A SWITCH FOR BASIC ROUTING
// switch (req.url) {
// case "/":
// path += "index.html";
// res.statusCode = 200;
// break;
// case "/about":
// path += "about.html";
// res.statusCode = 200;
// break;
// case "/about_me":
// res.setHeader("Location", "/about"); //THIS CHANGES THE req.url to "/about"
// res.statusCode = 301;
// return res.end(); //
// case "/blogs":
// path += "blogs.html";
// res.statusCode = 200;
// break;
// default:
// path += "404.html";
// res.statusCode = 404;
// break;
// }

// console.log("PATH: " + path);

// fs.readFile(path, (err, data) => {
// if (err) {
// console.log(err);
// res.end("ERROR FETCHING DATA");
// } else {
// res.end(data);
// }
// });
// });

// server.listen(3000, "localhost", () => {
// console.log("Listening on port 3001....");
// });

////////////////////////////////
//[STATUS CODES] = Codes that describe the type of response sent to the browser
//200 - OK;
//301 - Resource Moved;
//404 - Not Found;
//500 - Internal Server Error;

//[STATUS CODE RANGES]::
//100 range - Informational Responses
//200 range - Success Responses
//300 range - Codes for Redirects
//400 range - User or Client Error Codes
//500 range - Server Error Codes

//HANDLING STATUS CODES WITH ROUTING
// switch (req.url) {
// case "/":
// path += "index.html";
// res.statusCode = 200;
// break;
// case "/about":
// path += "about.html";
// res.statusCode = 200;
// break;
// case "/blogs":
// path += "blogs.html";
// res.statusCode = 200;
// break;
// default:
// path += "404.html";
// res.statusCode = 404;
// break;
// }

//////////////////////////////////////////////////////
//[REDIRECTS] = WHEN YOU DECIDE TO CHANGE THE URL OF A CERTAIN WEBPAGE E.G "./about_me" to "/about", BUT A VERY POPULAR WEBSITE PROBABLY HAS THAT OLD URL SHARED TO OTHER SOURCES, SO IF YOU JUST CHANGE THE URL, THOSE WHO COME THROUGH THE OLD URL GET A 404 ERROR (PAGE NOT FOUND), SO WE TAKE THAT URL AND REDIRECT IT IN OUR LOGIC, NOT JUST CHANGE IT BUT REDIRECT, THESE IS FUNDAMENTALLY IMPORTANT SO THE CLIENT KNOW THERE HAS BEEN A PERMANENT MOVEMENT OF THE URL
// res.setHeader("Location", "currentURL");, how you redirect, also ensure to set the correct status code i.e 301 (Resource Moved)
//WHEN YOU

//////////////////////////////////////////////////////
//[NPM] = NODE PACKAGE MANAGER, used to manage package managers used with node js, which are modules that node js doesn't have built-in like its core modules such as fs, http etc module, these additional modules/packages/libraries are installed with npm and managed within your dev folder with npm, these packages are things such as nodemon, lodash, express js, etc (and many many more)....these packages are codes written by other people that you can download and use, you can even create your own package, so when someone downloads the package it'd be added in the node modules folder automatically (node modules) never gets touched
//[PACKAGE.JSON] = KEEPS TRACK OF THIRD PARTY PACKAGES INSTALLED
/////////////////////////
//[LODASH] = Lodash is a JavaScript utility library that's like a toolbox 🧰 that gives you ready-made functions so you don’t have to write everything from scratch. In node js, it helps you work with data easily, it gives you access to methods to work with arrays, objects, etc...i.e _.pick(), _.once(), _.random(), _.filter(), \_cloneDeep(), etc

//YOU REQUIRE IT FIRST, const _ = require("lodash"); underscore is the conventional name.
//[USE]: let names = _.filter();

// const http = require("http");
// const fs = require("fs");
// const \_ = require("lodash");

// const server = http.createServer((req, res) => {
// res.setHeader("Content-Type", "text/html");
// console.log("REQ URL: " + req.url);
// let path = "./frontend/";

// const num = _.random(18, 20); //RANDOM NUM BETWEEN 18 & 20 (BOTH INCLUSIVE)
// console.log("RANDOM NUM: " + num);
// const greet = _.once(() => console.log("RUNS ONCE")); //CAN ONLY B CALLED ONCE, MULTIPLE CALLS OF THE FUNCTION IN ONE CODE EXECUTION WILL ONLY CALL IT ONCE
// greet(); //WILL ONLY BE CALLED ONCE
// greet();
// greet();
// greet();

// //USING A SWITCH FOR BASIC ROUTING
// switch (req.url) {
// case "/":
// path += "index.html";
// res.statusCode = 200;
// break;
// case "/about":
// path += "about.html";
// res.statusCode = 200;
// break;
// case "/about_me":
// res.setHeader("Location", "/about"); //THIS CHANGES THE req.url to "/about"
// res.statusCode = 301;
// return res.end(); //
// case "/blogs":
// path += "blogs.html";
// res.statusCode = 200;
// break;
// default:
// path += "404.html";
// res.statusCode = 404;
// break;
// }

// fs.readFile(path, (err, data) => {
// if (err) {
// console.log(err);
// res.end("ERROR FETCHING DATA");
// } else {
// res.end(data);
// }
// });
// });

// server.listen(3000, "localhost", () => {
// console.log("Listening on port 3001....");
// });

//////////
//[NODE MODULES] = THE NODE MODULES FOLDER KEEPS ALL THE MODULES YOUR PROJRECT DEPENDS ON LIKE THE PROJECT DEPENDENCIES SUCH AS LODASH AND OTHERS, THESE DEPENDENCIES ARE NOTED IN THE PACKAGE-LOCK FILE...WHEN YOU SHARE YOUR CODE WITH OTHERS OR COMMIT IT TO GITHUB, YOU USUALLY ONLY SHARE THE SOURCE CODE AND PACKAGE-LOCK&JSON, BUT NOT THE NODE MODULES FOLDER SINCE IT CAN GET VERY BIG, AND THEN WHEN OTHER PEOPLE USE THAT CODE, THEY DONT HAVE TO MANUALLY INSTALL ALL THE DEPENDENCIES ALL THEY HAVE TO DO IS RUN 'npm install' WHICH WILL INSTALL ALL THE DEPENDENCIES LISTED IN THE PACKAGE.JSON FILE, NB: package-lock, keeps the exact details such as versions of the packages, and json only keeps the names and is actually the main file

////////////////////////////////////////////////////////////////////////////////////////
/\*_ @format _/

//[EXPRESS JS] = is a Node.js framework that makes it easier to write clean, readable, and manageable backend code, especially as your app grows bigger and more complex.
//WORKING WITH EXPRESS, create the file, usually named app.js
//require express and create a server instance

// const express = require("express");

// //create a server instance
// const app = express();

// //HOW YOU RESPOND TO THE REQUESTS
// //USE THE res.send() method, it automatically sets header info such as Content-Type, statusCodes, etc, ends the response automatically based ont the content you send back
// app.get("/", (req, res) => {
// //NO NEED FOR:
// // res.setHeader("Content-Type", "text/html");
// // res.write("<h1>HELLO</h1>");
// // res.end();

// // res.send("<h1>HELLO</h1>");

// //RESPONDING WITH AN HTML PAGE FILE
// res.sendFile("./frontend/index.html", { root: \_\_dirname });

// //root: Since express doesn't work well with relative paths, this gives the absolute roof folder of the file, then Express adds it with the filepath like this, **dirname + "/frontend/index.html", to get the absolute path of the file, so **dir is "C:\Users\lisak\LearningNodeJs"
// console.log("RESPONSE SENT");
// });

// //RESPONSE TO A DIFFERENT PAGE
// app.get("/about", (req, res) => {
// // res.send("<h1>ABOUT</h1>");
// //RESPONDING WITH AN HTML PAGE FILE
// res.sendFile("./frontend/about.html", { root: \_\_dirname });
// console.log("RESPONSE SENT");
// });

// //RESPONSE TO A DIFFERENT PAGE
// app.get("/blogs", (req, res) => {
// // res.send("<h1>BLOGS</h1>");
// res.sendFile("./frontend/blogs.html", { root: \_\_dirname });

// console.log("RESPONSE SENT");
// });

// //REDIRECTION
// app.get("/about_me", (req, res) => {
// res.redirect("/about");
// });

// //404 PAGE

// //EXPRESS RESPONSE METHODS app.get(), ARE READ LIKE AN IF STATEMENT BUT SEPARATED, meaning each app.get() is read on every request and if its url matches the requested one, its function gets executed and then all others are ignored, this is done line by line, and if none of them match, the app.use(), gets executed acting as the else statement, which is why it's IMPORTANT THAT IT ALWAYS AT THE BOTTOM OF YOUR app.get() methods

// app.use((req, res) => {
// //NO NEED FOR...
// // res.statusCode = 404;

// //...INSTEAD
// res.status(404).sendFile("./frontend/404.html", { root: \_\_dirname });
// });
// //THE use() MIDDLEWARE THINGY'S RESPONSE DOES NOT HAVE statusCode() property but status instead
// //SINCE use(), and node wont automatically detect you're returning a '404 page', it won't set the status to 404, therefore you gotta set it manually

// //LISTEN FOR REQUESTS
// app.listen(3000, () => {
// console.log("Listening on port 3000...");
// });

////////////////////////////////////////////////////////////////////////////////
//[MIDDLEWARE], EJS (Embedded JavaScript) = Middleware is middle software that sits between client requests and your server responses, it's software used to handle requests, either forward it, check authentication of client, error handling etc.
//EJS is a Template Engine for Node js that lets you write HTML and inject dynamic data using Js. index.ejs, <%=EJS%>

//install it first:: npm install ejs
////register ejs as your view engine:: app.set("view engine", "ejs")

const express = require("express");

const app = express();
//register ejs as your view engine
app.set("view engine", "ejs"); //The set() method is used to set settings for your app

app.set("views", "frontend"); //setting my views folder to "frontend" since ejs defaultly checks the "views" folder for page views

// app.get("/", (req, res) => {
// // res.sendFile("./frontend/index.html", { root: \_\_dirname });
// //EJS uses render() to render the views, eliminates the need to use sendFile()
// res.render("index"); //Will automatically look for the "index.ejs" file in the views folder i.e "frontend" and render it, no need to specify the extension
// });

// app.get("/about", (req, res) => {
// res.render("about");
// });

// app.get("/blogs", (req, res) => {
// res.render("blogs");
// });

// app.get("/about-me", (req, res) => {
// res.redirect("/about");
// });

// app.get("/blogs/create", (req, res) => {
// res.render("create");
// });

// app.use((req, res) => {
// res.status(404).render("404");
// });

//////////////////////////////////////////////////////////////////////////////////
//EJS DYNAMIC RENDERING = Creating and passsing dynamic data to be rendered on the view/page/browser, you can create the data in the server and pass it to the view rendered to the user, making pages non-static and dynamic

//VALID EJS DYNAMIC RENDERING
// <h2><% const name = "Lissa" %>
// Hello <%= name %>
// </h2>

// <%
// const users = ["Lissa", "John", "Mike"];
// %>
// <ul>
// <% users.forEach(user => { %>
// <li><%= user %></li>
// <% }) %>
// </ul>

//////////////
//PASSING DATA THROUGH THE render() method, as an object, res.render("/", {data})

// const blogs = [
// {
// title: "Blog 1",
// snippet:
// "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
// },
// {
// title: "Blog 2",
// snippet:
// "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
// },
// {
// title: "Blog 3",
// snippet:
// "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
// },
// ];

// app.use(express.static("./public"));
// app.get("/", (req, res) => {
// res.render("index", { blogs: blogs, title: "Home" }); //passing the blogs array to the index view
// console.log("REQ: " + req.url);
// });

// app.get("/about", (req, res) => {
// res.render("about", { title: "About Page" });
// });

// app.get("/blogs", (req, res) => {
// res.render("blogs");
// });

// app.get("/about-me", (req, res) => {
// res.redirect("/about");
// });

// app.get("/blogs/create", (req, res) => {
// res.render("create", { title: "Create Blog" });
// });

// app.use((req, res) => {
// res.status(404).render("404", { title: "Page Not Found" });
// });

// app.listen(3000, () => console.log("Server Listening On Port 3000..."));

/////////////////////////////////////////////////////////////////////////////////
//[PARTIALS/PARTIAL TEMPLATES] = React Like Components i.e reusable html/partial templates
//YOU CREATE ONE COMPONENT.ejs, IN A PAGE/VIEW, YOU <%- include("partialPath") %>.........this is how you create and use a partial
//<%- THE MINUS IS USED WHEN YOU WANT TO PASS RAW HTML RATHER THAN A VALUE WHICH IS PASSED WITH THE = SIGN;
//YOU CAN EVEN ADD THE SAME HEADER TO DIFFERENT VIEWS USING THIS METHOD, LIKE CREATING ONE HEAD FILE, ADD ALL YOUR CSS THERE, THEN ADD IT TO ALL VIEWS, FOR GLOBAL STYLING
//IDEAL WAY TO ADD EXTERNAL CSS, CREATE A PUBLIC FOLDER TO KEEP YOUR (CSS FILE, PAGE ICON, PUBLIC ASSETS THAT'LL BE NEEDED BY THE BROWSER WHEN IT RENDERS YOUR PAGE);
// app.use(express.static("staticFolder")); staticFolder is the public folder your created
//YOU CAN PASS DATA INTO PARTIALS LIKE YOU PASS PROPS IN REACT>> <%- include("partailPath", {blog:blog}) %>

////////////////////////////////////////////////////////////////////////////////
//[MIDDLEWARE & STATIC FILES] = Any type of code that runs (on the server) between getting a request and send a response.
//THE use() METHOD IS GENERALLY USED FOR MIDDLEWARE OPERATIONS, SUCH AS LOGGING REQ METADATA LIKE REQ.URL, REQ.PATH, REQ.HOSTNAME ETC,
//THE get() METHOD IS ALSO TECHNICALLY MIDDLEWARE BECAUSE IT'S ALSO CODE THAT RUNS BETWEEN A REQUEST AND RESPONSE, ONLY DIFFERENCE IS THAT THEY RUN ONLY ONLY IF THE REQUESTED IS THE ONE THEY'RE SPECIFIED FOR UNLIKE THE .use() WHICH RUNS ON ANY REQUEST

//THE STRUCTURE AND LOGIC OF THE SERVER CODE IS CRUTIAL, IT IS READ TOP TO BOTTOM, AND .GET() ONLY RUNS TO SPECIFIC REQ PATH, SO IF A .GET() RUNS, AFTER THAT THE CODE EXECTUTION STOPS, AND ALSO WHEN A .USE() THE EXECUTION STOPS (basically says res.end() and that's it).....UNLESS YOU ENVOKE THE .next() METHOD WHICH IS THE THRID PARAM AFTER (res,res,next), IT ESSENTIALLY TELLS NODE TO NOT STOP AND CONTINUE OT THE NEXT CODE, THEREFORE YOU CAN USE THE .use() for other middleware operatinos such as logger details, authentication, parsing JSON data from requests and returning 404 pages

//STATIC FILES ARE FILES SUCH AS STYLE.CSS, FAVICON, ETC ASSETS THAT THE BROWSER NEEDS ACCESS TO, AND HAVE TO BE PUBLICLY AVAILABLE
//THE SERVER ENSURES FILES/DATA IN THE SERVER ARE PRIVATE, UNLESS SPECIFIED TO BE PUBLICLY AVAILABLE TO THE BROWSER
//TO CREATE AND SERVE AN EXTERNAL STYLESHEET, YOU CREATE A PUBLIC FOLDER, AND ADD UR STYLESHEET.CSS
//IN YOUR SERVER, TELL IT TO SERVE THE PUBLIC FOLDER AS STATIC I.E PUBLIC....app.use(express.static("public"));
//IN YOUR VIEW, YOU ENSURE TO USE link:css path like this: "/style.css",

const blogs = [
{
title: "Blog 1",
snippet:
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
},
{
title: "Blog 2",
snippet:
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
},
{
title: "Blog 3",
snippet:
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia repellat facilis?",
},
];

module.exports = { blogs };

// const morgan = require("morgan"); //AUTOMATIC LOGGER, LOGS REQ METADATA IN DIFFERENT FORMARTS, 'tiny', 'dev'

// app.use(express.static("./public")); //SERVES THE BROWSER PUBLIC ACCESS TO THE STATIC FILES IN THIS FOLDER...the method has a built-in handling of the next() so no need to handle next() here.

// app.use((req, res, next) => {
// // console.log("========================");
// // console.log("URL: " + req.url);
// // console.log("HOSTNAME: " + req.hostname);
// // console.log("METHOD: " + req.method);
// // console.log("PATH: " + req.path);

// // res.end("HELLOOOO"); //ENDS HERE, DOESN'T CONTINUE TO THE REST OF THE CODE, UNTIL YOU INVOKE THE next() method
// next(); //GOES TO THE NEXT CODE, NB: CAN'T USE NEXT AFTER SENDING YOUR RESPONSE i.e res.end(), SINCE YOU'RE STILL RUNNING MIDDLEWARE
// });

//INSTEAD OF MANUALLY LOGGIN STUFF, YOU CAN USE MORGAN
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
// res.render("index", { blogs: blogs, title: "Home" }); //passing the blogs array to the index view
// // console.log("REQ: " + req.url);
// });

// app.get("/about", (req, res) => {
// res.render("about", { title: "About" });
// });

// app.get("/blogs", (req, res) => {
// res.render("blogs");
// });

// app.get("/about-me", (req, res) => {
// res.redirect("/about");
// });

// app.get("/blogs/create", (req, res) => {
// res.render("create", { title: "Create Blog" });
// });

// app.use((req, res) => {
// res.status(404).render("404", { title: "Page Not Found" });
// });

// app.listen(3000, () => console.log("Server Listening On Port 3000..."));

//////////////////////////////////////////////////////////////////////////////////
/\*_ @format _/

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { blogs } = require("./app"); //LOCAL DATABASE
const Blog = require("./models/blog");

const app = express();

app.set("view engine", "ejs");
app.set("views", "frontend");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//[MONGO DB] = A no SQL Database that stores data in documents (JSON-like format) instead of tables. It contains collections (like tables in SQL) that contain documents (like rows in SQL), but more flexible since its document (rows) are not fixed to table columns but flexible.
//DOCUMENT EXAMPLE (JSON)
// {
// "name": "Lissa",
// "age": 21,
// "skills: ["React", "Js", "SQL","MongoDB"],
// }

//MONGO DB uses embedded documents or references for relationships, unlike SQL that uses JOIN()
//It is best suitable for fast dev, interactive apps with changing data

//MONGOOSE = An ODM (Object Document Mapping) library that wraps the standard Mongo DB API, and provides an easier way to connect and interact with the database.
//It uses Schema & Models to defines the structure of documents and uses models to interact with the database, e.g Model.find(), Model.create(), Model.deleteOne(), etc..

//USING MONGOOSE TO CREATE AND INTERACT WITH A MONGO DB DATABASE
//npm install mongodb <<install mongo db
//npm install mongoose <<install mongoose

//require mongoose, express, etc and connect to the database using mongoose
//const mongoose = require("mongoose");

//mongoose.connect(dbURI),//connecting to the db is asynchronous and returns a promise
//.then(result => best practice is to app.listen(), open server once connected to the db).catch(err => handleError);

//INTERACTING WITH THE DATABASE, FIRST CREATE A SCHEMA&MODEL YOU GONNA USE TO INTERACT WITH THE DATABASE

//CREATE A MODELS FOLDER/COLLECTION, e.g models/blog.js, (model should be singular, since Mongo automatically pluralizes your model, to "model"s)

//models/blog.js::
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema; //Create a Schema class

// //SCHEMA DEFINES THE STRUCTURE OF THE DOCUMENT/MODEL
// const blogSchema = new Schema(
// {
// title: String,
// body: {
// type: String,
// required: true,
// },
// },
// { timestamps: true }, //AUTOMATICALLY ADDS TIMESTAMPS ON MODIFICATION OF THE DOCUMENT
// );

// //CREATE THE MODEL CLASS AND EXPORT IT TO USE ELSE WHERE
// //THIS model(modelNameSingular, schema)
// const Blog = mongoose.model("Blog", blogSchema); //MONGOOSE WILL PLURALISE THIS NAME AND LOOK FOR THIS COLLECTION IN THE DATABASE WHENVEN YOU INTERACT WITH IT

// module.exports = Blog;//EXPORT
// //IMPORT
// const Blog = require("./")

//CONNECT TO MONGO DB
const dbURI =
"mongodb+srv://lissang:firstCluster@firstcluster.v11seun.mongodb.net/blogsDB";
mongoose
.connect(dbURI)
.then((result) => {
console.log("SUCCESSFULLY CONNECTED TO THE DATABASE!");
//SERVER LISTENS AFTER A SUCCESSFUL CONNECTION TO THE DATABASE
app.listen(3000, () => console.log("Server Listening On Port 3000..."));
})
.catch((error) => {
console.log("DATABASE CONNECTION FAILED: " + error);
});

app.get("/", (req, res) => {
// res.render("index", { blogs: blogs, title: "Home" });
Blog.find()
.sort({ createdAt: -1 })
.then((result) => {
res.render("index", { blogs: result, title: "Home" });
})
.catch((error) => console.log(error));
});

app.get("/about", (req, res) => {
res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
res.render("blogs");
});

app.post("/blogs", (req, res) => {
console.log(req.body);
});

app.get("/about-me", (req, res) => {
res.redirect("/about");
});
//ENSURE TO IMPORT THE MODEL
//HARD-CODING THE BLOG INPUT
// app.get("/blogs/create", (req, res) => {
// // res.render("create", { title: "Create Blog" });

// const newBlog = new Blog({
// title: "Othandwayo Ngwendu",
// snippet: "Lorem Ipsum dolor, isjosns dsihsuhdsiu sudhsidh sd",
// body: "Lorem Ipsum dolor, isjosns dsihsuhdsiu sudhsidh sd, Lorem Ipsum dolor, isjosns dsihsuhdsiu sudhsidh sd",
// });

// //SAVE THE COLLECTION INSTANCE TO THE DB, save is asynchronous
// newBlog
// .save()
// .then((result) => {
// res.send(result);
// })
// .catch((error) => console.log(error));
// });

app.get("/blogs/create", (req, res) => {
res.render("create", { title: "Create Blog" });
});

////////////////////////////////////////////////////////////////////////////////
//GET, POST, DELETE, & PUT REQUESTS, = DIFFERENT OPERATIONS USED IN INTERACTING WITH THE BACKEND (SERVER & DATABASE);
//GET = Requests to get a resource
//POST = Requests to create new data
//DELETE = Requests to delete data
//PUT = Requests to update data

//THESE REQUESTS ARE HANDLED DIFFERENTLY BY NODE, SO THEY CAN BE OPERATED IN THE SAME ROUTE WITHOUT ISSUES.

//POST REQUEST

app.post("/blogs/create", (req, res) => {
//REQ.BODY = {} OF THE FORM DATA (ENSURE YOUR FORM WITH THE NAMES SPECIFIED IN THE FORM INPUTS)
//TO ADD THIS DATA WE GETTING FROM THE FRONTEND, WE SHOULD CREATE A MODEL INSTANCE WITH THE FRONTEND DATA THEN SEND THAT TO THE DATABASE

    // const newData = new Blog({
    // 	title: req.body.title,
    // 	snippet: req.body.snippet,
    // 	body: req.body.body,
    // });//CREATING THE MODEL INSTANCE AND ADDING THE DATA

    //BUT SINCE THE REQ.BODY IS AN OBJECT WITH THE SAME NAMES, THERE'S ANY EASIER SHORTHAND FOR ALL THE ABOVE
    const newBlog = new Blog(req.body);

    newBlog
    	.save()
    	.then((result) => {
    		console.log("SAVED TO DATABASE");
    		// console.log(result);
    		res.redirect("/");
    	})
    	.catch((error) => console.log(error));

});

///////////////////////////////////////////////////////////////////////////
//ROUTE PARAMETERS = localhost:3000/blogs/:id, the id may change value based on the blog visited, so ROUTE PARAMS are the varaible parts of the route that may change
//SAY EACH BLOG CAN BE VIEWED IN ITS OWN PAGE...
//SO BLOGSPAGE/SINGLEBLOG MUST BE CREATED:
//IN THE VIEW PAGE: <a href="/<%= blog._id %>">view blog</a>, since the view passes the blog data to each blog component, the blogs returned from the index page, each return an object that contains the blog data in the database, including the blog id, timestamps, etc,
//from that we can extract the blog id i.e \_id, and use it in the route as the visited page, also use it to Blogs.findById() to return that certain blog

///
app.get("/:id", (req, res) => {
const blogID = req.params.id; //gets the :id route parameter, so the get("") path here is dynamic, and depends on the id of the visited blog, and whatever that id is, it can be accessed from the req object, called req.params.id, :name, the value is whatever you named in the route, "/:whaaat" = req.params.whaaat;

    // console.log(blogID); //THIS ID IS ACTAULLY THE SAME ID WE PASSED THROUGH THE ROUTE URL, THAT ID WE ALSO MADE DYNAMIC BY EXTRACTING THE CURRENT BLOG'S ID FROM ITS METADATA IN FROM THE DATABASE

    Blog.findById(blogID)
    	.then((result) => {
    		// console.log("VIEWED: " + result); //RETURNS THE DB JSON OF THAT DOCUMENT WITH THAT ID
    		res.render("blogDetails", { blog: result, title: result.title });
    	})
    	.catch((error) => console.log(result));

});

//DELETE METHOD =

app.delete("/:id", (req, res) => {
const blogId = req.params.id;
Blog.findByIdAndDelete(blogId)
.then((result) => {
// console.log("DELETED:" + result);
res.json({ redirect: "/" });
})
.catch((error) => console.log(error));
});

app.put("/:id", (req, res) => {
const blogId = req.params.id;

    Blog.findByIdAndUpdate(blogId, { body: req.body.body }, { new: true })
    	.then((updated) => {
    		console.log(updated);
    		res.json(updated.body);
    	})
    	.catch((error) => console.log(error));

});

app.use((req, res) => {
res.status(404).render("404", { title: "Page Not Found" });
});

////////////////////////////////////////////
EXPRESS ROUTERS:
/\*_ @format _/

const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", (req, res) => {
// res.render("index", { blogs: blogs, title: "Home" });
Blog.find()
.sort({ createdAt: -1 })
.then((result) => {
res.render("index", { blogs: result, title: "Home" });
})
.catch((error) => console.log(error));
});

router.get("/create", (req, res) => {
res.render("create", { title: "Create Blog" });
});

router.get("/:id", (req, res) => {
const blogID = req.params.id;
Blog.findById(blogID)
.then((result) => {
res.render("blogDetails", { blog: result, title: result.title });
})
.catch((error) => console.log(result));
});

router.post("/create", (req, res) => {
const newBlog = new Blog(req.body);

    newBlog
    	.save()
    	.then((result) => {
    		console.log("SAVED TO DATABASE");
    		// console.log(result);
    		res.redirect("/");
    	})
    	.catch((error) => console.log(error));

});

router.delete("/:id", (req, res) => {
const blogId = req.params.id;
Blog.findByIdAndDelete(blogId)
.then((result) => {
// console.log("DELETED:" + result);
res.json({ redirect: "/" });
})
.catch((error) => console.log(error));
});

router.put("/:id", (req, res) => {
const blogId = req.params.id;

    Blog.findByIdAndUpdate(blogId, { body: req.body.body }, { new: true })
    	.then((updated) => {
    		console.log(updated);
    		res.json(updated.body);
    	})
    	.catch((error) => console.log(error));

});

module.exports = router;

/////////////////////////////////////////////////////////////////////////////

    // function sendNote() {
    // 	if (note.title.trim() && note.body.trim()) {
    // 		fetch("http://localhost:3000/", {
    // 			method: "POST",
    // 			headers: { "Content-Type": "application/json" },
    // 			body: JSON.stringify({ title: note.title, body: note.body }),
    // 		}).then((res) => location.reload());
    // 	} else {
    // 		alert("FILL IN THE NOTES");
    // 	}
    // }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[MONGOOSE METHODS]::

These are not Express methods — they're Mongoose methods (the ODM library that talks to MongoDB). Express just handles the HTTP routing, Mongoose handles the database.

Finding
js// FIND ONE DOCUMENT
await Model.findOne({ status: "active" })

// FIND BY MONGODB \_id SPECIFICALLY (shorthand for findOne({ \_id: id }))
await Model.findById("64abc123...")

// FIND ALL DOCUMENTS MATCHING FILTER
await Model.find({ status: "active" })

// FIND ALL DOCUMENTS IN COLLECTION
await Model.find({})

Creating
js// CREATE AND SAVE IN ONE GO
await Model.create({ name: "Lissa", role: "admin" })

// CREATE INSTANCE THEN SAVE SEPARATELY
const doc = new Model({ name: "Lissa", role: "admin" })
await doc.save()

Updating
js// FIND ONE AND UPDATE, RETURNS THE DOCUMENT
await Model.findOneAndUpdate(
{ singletonKey: "ADMIN_CONFIG" }, // filter
{ business_name: "My Business" }, // what to update
{ new: true, upsert: true } // options
)
// new: true → return the updated document, not the old one
// upsert: true → create the document if it doesn't exist

// FIND BY ID AND UPDATE
await Model.findByIdAndUpdate("64abc123...", { name: "Lissa" }, { new: true })

// UPDATE MANY DOCUMENTS AT ONCE
await Model.updateMany({ status: "inactive" }, { status: "active" })

Deleting
js// FIND ONE AND DELETE, RETURNS THE DELETED DOCUMENT
await Model.findOneAndDelete({ name: "Lissa" })

// FIND BY ID AND DELETE
await Model.findByIdAndDelete("64abc123...")

// DELETE ALL DOCUMENTS MATCHING FILTER
await Model.deleteMany({ status: "inactive" })

Useful chained methods
js// LIMIT — only return 10 results
await Model.find({}).limit(10)

// SORT — 1 = ascending, -1 = descending
await Model.find({}).sort({ createdAt: -1 })

// SKIP — skip first 10 (useful for pagination)
await Model.find({}).skip(10)

// CHAINED TOGETHER (pagination example)
await Model.find({}).sort({ createdAt: -1 }).skip(0).limit(10)

// SELECT — same as projection but chained
await Model.find({}).select("name email role")

The $set operator
Without $set, updating replaces the entire document. With $set it only updates the specified fields:
js// WITHOUT $set — replaces entire document, everything else is wiped
await Model.findOneAndUpdate(
{ \_id: id },
{ name: "Lissa" } // ✗ every other field gets deleted
)

// WITH $set — only updates name, everything else stays untouched
await Model.findOneAndUpdate(
{ \_id: id },
{ $set: { name: "Lissa" } } // ✓ safe
)
