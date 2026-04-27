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
(User input or Serive output)
Reading/Writing files(I/O operation)
Animation or transitions finshing(timers)


Asynchronous Programming 
Callbacks : function passed into other functions to run later.So in other words I can say that in js when function passed into other function we unlock a new feature of js in which one function wait event occur or input give and rest of the program will run as usual

Promises : Objects representing a value that may be available now, later or never.
Pending  
Fulfilled
Rejected

.then()
.catch()
.finally() {less usage}

Async/Await : Just modern syntax that makes asynchronous code look synchronous.

// Using a callback
//setTimeout(callback,delay,..args)
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
//setTimeout is built in function that call other function to run in specfic delay


// Using a Promise
//manually create promise object
//(State)
//(Result)

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(2000).then(() => console.log("2 seconds passed"));


fetch("https://api.example.com/data")
//fetch return promise object
  .then(response => response.json())//.then(onFulfilled,onRejected)
  .then(data => console.log(data))//.catch(onRejected)
  .catch(error => console.error(error));//.finally(onFinally)

Static Method of Promise
Promise.resolve(value)//create a promise which is already resolve
Promise.reject(reason)//which is already rejected
Promise.all(iterable)//runs multiple promises in parallel resolve if all succeed other reject
Promise.race(iterable)//resolve or reject on the basis of first promise
Promise.allSettled(iterable)//Waits for all promises to finish, regardless of success or failure
Promise.any(iterable)//Resolves as soon as the first promise succeeds. Ignores rejections unless all fail.
//Static methods → belong to Promise class itself, used to create/coordinate promises.

//Public methods → belong to individual promise objects, used to handle results.

// Using async/await
//async always return promise
//await pauses execution inside that function until the Promise resolves or rejects
//we wrap up await in try and catch for error handling
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

1) Content Manipulation
innerHTML
textContent
classList

2) Attribute Manipulation
getAttribute(name)
setAttribute(name,value)
removeAttribute(name)
hasAttribute(name)

3) Class Manipulation
className: Get or set all classes as string
classList.add("class")
classList.remove("class") 
classList.toggle("class")
classList.contains("class")

4) Style Manipulation
style.propertyName
getComputedStyle(element)

5) Element Access & Structure
id tagName nodeName
children firstChild lastChild parentNode
appendChild(node)


const parent = document.getElementById("container");//getElementbyId give div which is named as container
const newPara = document.createElement("p");//createElement create new element of para attribute
newPara.textContent = "Second paragraph";//add content in the <p> tag
after this it look like <p>Second paragraph</p>
parent.appendChild(newPara);

const parent = document.getElementById("container");
const newPara1=document.createElement("p");
newPara1.textcontent="First paragraph";

parent.appendChild(newPara1);




removeChild(node)
replaceChild(newNode,oldNode)

6) Event Attributes
onclick, onchange, onmouseover
addEventListener(event,handler)





Updating UI dynamically

Handling user interactions

Creating animations

Building interactive web apps