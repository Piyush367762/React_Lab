Intro
Javascript (JS) is a high-level, interpreted programming language(complie as soon as you write code on ide not like wait for write whole code and then form a file and then give to complier)

Why we use javascript if it is not your first programming language?

It primarily supports dynamic behavior on websites, supports event-driven programming and widely interacts with HTML and CSS

Key point which help in future
Event-driven
Asynchronous programming
Dynamic typing (not need to define datatype explicitly)

// Variables
let name = "Piyush";   // block-scoped
const age = 25;        // constant
var city = "Delhi";    // function-scoped

// Functions
function greet(user) {
  return `Hello, ${user}!`;
}

// Arrow functions
const add = (a, b) => a + b;

// Objects
const person = {
  name: "Piyush",
  age: 25,
  greet() {
    console.log("Hi!");
  }
};


Data Types
Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt

Reference: Object, Array, Function, Date, RegExp

let str = "Hello";     // String
let num = 42;          // Number
let isActive = true;   // Boolean
let arr = [1, 2, 3];   // Array
let obj = { key: "value" }; // Object


Control Structures

// Conditional
if (num > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log(count++);
}

Why we need Asynchronous Programming
JavaScript is single-threaded, meaning it executes one thing at a time. Without asynchronous programming, tasks like fetching data from a server would block everything else. Asynchronous programming allows JS to handle long-running tasks without freezing the UI.

Asynchronous Programming 
Callbacks : function passed into other functions to run later.So in other words I can say that in js when function passed into other function we unlock a new feature of js in which one function wait event occur or input give and rest of the program will run as usual

Promises : Objects representing a value that may be available now, later or never.

Async/Await : Just modern syntax that makes asynchronous code look synchronous.

// Using a callback
//setTimeout(callback,delay,..args)
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
//setTimeout is built in function that call other function to run in specfic delay


// Using a Promise
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Using async/await
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();


DOM Manipulation in JavaScript
The DOM (Document Object Model) is a tree-like structure representing HTML elements. JavaScript can interact with the DOM to change content, styles, and structure dynamically.

Common Operations
Selecting elements

javascript
const heading = document.getElementById("title");
const buttons = document.querySelectorAll(".btn");

Changing content

javascript
heading.textContent = "New Heading!";
Changing styles

javascript
heading.style.color = "blue";
Adding/removing elements

javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);

heading.remove(); // removes element
Event handling

javascript
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

DOM manipulation is used for:

Updating UI dynamically

Handling user interactions

Creating animations

Building interactive web apps