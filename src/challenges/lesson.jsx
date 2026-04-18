
export const CURRICULUM = [
  // --- PHASE 1: UI FUNDAMENTALS ---
  {
    id: "jsx-lesson",
    title: "1. JSX Basics",
    type: "lesson",
    content: `
# Welcome to JSX
JSX stands for JavaScript XML. It allows us to write HTML directly inside JavaScript, making it easier to build user interfaces.

### Key Rules to Remember:
1. **Close Every Tag:** Even empty tags like \`<img>\` or \`<br>\` must be closed like \`<img />\`.
2. **One Root Element:** A component can only return one single parent element. If you have siblings, wrap them in a \`<div>\` or a Fragment \`<>\` \`</>\`.
3. **CamelCase Attributes:** Use \`className\` instead of \`class\`, and \`htmlFor\` instead of \`for\`.
    `,
    img : "/duck.png"
  },
  {
    id: "jsx-lab",
    title: "Lab: Fix the JSX",
    type: "lab",
    description: "Task: This code is crashing! Fix the three JSX errors so the component renders successfully. (Hint: look at the root element, the class name, and the break tag).",
    files: {
      "/App.js": `export default function App() {\n  return (\n    <h1 class="title">Hello ReactLab</h1>\n    <p>Let's learn React</p>\n    <br>\n  )\n}`
    },
  },
  {
    id: "comp-lesson",
    title: "2. Components",
    type: "lesson",
    content: `
# Components
A Component is just a JavaScript function that returns JSX. They are reusable, independent pieces of UI (like LEGO bricks).

React takes this Virtual DOM description, compares it to the actual browser page, and updates only the parts that changed. This makes it much faster than refreshing the whole page.

**Rule:** Component names **MUST** start with a capital letter (e.g., \`Header\`, not \`header\`), otherwise React thinks it's a standard HTML tag.
    `,
    img : "/pic2.png"
  },
  {
    id: "comp-lab",
    title: "Lab: Broken Components",
    type: "lab",
    description: "Task: We are trying to render a Navbar and a Footer inside the App, but nothing is showing up! Fix the component names and make sure they return JSX properly.",
    files: {
      "/App.js": `function navbar() {\n  return <nav>My Website Navigation</nav>;\n}\n\nfunction Footer() {\n  <p>Copyright 2026</p>; // Missing something here?\n}\n\nexport default function App() {\n  return (\n    <div>\n      <navbar />\n      <main><h1>Welcome!</h1></main>\n      <Footer />\n    </div>\n  );\n}`
    }
  },

  // --- PHASE 2: DATA & LOGIC ---
  {
    id: "props-lesson",
    title: "3. Props (Properties)",
    type: "lesson",
    content: `
# Props
Props are like function arguments in JavaScript. They allow you to pass data from a parent component down to a child component. 

This makes your components dynamic. Instead of hard-coding a name, you pass it as a prop so the component can be reused for different users! Props are **read-only**; a child cannot modify the props it receives.
    `,
    img : "/pic3.png"
  },
  {
    id: "props-lab",
    title: "Lab: Passing Props",
    type: "lab",
    description: "Task: The 'ProfileCard' is expecting a 'username' and 'role' prop, but it's currently receiving the wrong data. Fix the App component to pass the correct props.",
    files: {
      "/App.js": `function ProfileCard(props) {\n  return (\n    <div className="card">\n      <h3>User: {props.username}</h3>\n      <p>Role: {props.role}</p>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div>\n      {/* Fix the props being passed here */}\n      <ProfileCard name="Alice" job="Admin" />\n    </div>\n  );\n}`
      
    },
  },
  {
    id: "cond-lesson",
    title: "4. Conditional Rendering",
    type: "lesson",
    content: `
# Conditional Rendering
In React, you can conditionally render UI using standard JavaScript logic. 

Because we write JS inside JSX using curly braces \`{}\`, we can use tools like:
* **Ternary Operator:** \`condition ? <TrueUI /> : <FalseUI />\`
* **Logical AND:** \`condition && <TrueUI />\` (Renders nothing if false)
    `,img : "/pic4.png"
  },
  {
    id: "cond-lab",
    title: "Lab: The Toggle Switch",
    type: "lab",
    description: "Task: If 'isLoggedIn' is true, show the 'Welcome Back' message. If false, show the 'Please Login' button. The current ternary operator is broken.",
    files: {
      "/App.js": `export default function App() {\n  const isLoggedIn = false;\n\n  return (\n    <div>\n      {/* Fix the syntax of this ternary operator */}\n      {isLoggedIn ? \n        <h1>Welcome Back!</h1> ;\n        <button>Please Login</button>\n      }\n    </div>\n  );\n}`
    }
  },

  // --- PHASE 3: INTERACTIVITY ---
  {
    id: "events-lesson",
    title: "5. Events",
    type: "lesson",
    content: `
# Handling Events
React can perform actions based on user events, just like standard HTML (\`onClick\`, \`onChange\`, \`onSubmit\`).

**The Golden Rule:** You must pass a *function* to the event handler, not call the function immediately. 
* ✅ Correct: \`onClick={handleClick}\`
* ❌ Incorrect: \`onClick={handleClick()}\` (This runs the moment the page loads!)
    `,img : "/pic5.png"
  },
  {
    id: "events-lab",
    title: "Lab: The Overeager Button",
    type: "lab",
    description: "Task: The alert is firing as soon as the page loads, and clicking the button does nothing! Fix the onClick handler.",
    files: {
      "/App.js": `export default function App() {\n  function shout() {\n    alert("You clicked me!");\n  }\n\n  return (\n    <button onClick={shout()}>\n      Click Me\n    </button>\n  );\n}`
    }
  },
  {
    id: "state-lesson",
    title: "6. State (useState)",
    type: "lesson",
    content: `
# Introducing State
Props allow you to pass data, but what if a component needs to change its own data (like a counter or a typed input)? That's where **State** comes in.

We use the \`useState\` Hook. It gives us two things:
1. The current value.
2. A function to update that value.

**Crucial:** NEVER modify state directly (e.g., \`count = count + 1\`). Always use the setter function (\`setCount(count + 1)\`), otherwise React won't know it needs to update the screen!
    `,img : "/pic6.png"
  },
  {
    id: "state-lab",
    title: "Lab: Broken Counter",
    type: "lab",
    description: "Task: This developer tried to build a counter using a regular variable instead of state. Import 'useState' from React and fix the code so the UI actually updates when you click the button.",
    files: {
      "/App.js": `import React from "react";\n\nexport default function App() {\n  let count = 0; // This won't trigger a re-render!\n\n  function addOne() {\n    count = count + 1;\n    console.log(count);\n  }\n\n  return (\n    <div>\n      <h1>Count: {count}</h1>\n      <button onClick={addOne}>Increment</button>\n    </div>\n  );\n}`
    },
  },
  
  // --- PHASE 4: ADVANCED UI ---
  {
    id: "lists-lesson",
    title: "7. Rendering Lists",
    type: "lesson",
    content: `
# Rendering Lists
To turn an array of data into an array of UI elements, we use the JavaScript \`.map()\` array method.

**The Key Prop:** Every item rendered inside a list must have a unique \`key\` prop (like an ID). React uses this to keep track of which items were added, changed, or removed.
    `,img : "/pic7.png"
  },
  {
    id: "lists-lab",
    title: "Lab: Missing Keys",
    type: "lab",
    description: "Task: Map over the 'groceries' array to display an <li> for each item. Make sure to assign a unique 'key' to prevent React console warnings!",
    files: {
      "/App.js": `export default function App() {\n  const groceries = [\n    { id: 1, name: "Apples" },\n    { id: 2, name: "Bananas" },\n    { id: 3, name: "Bread" }\n  ];\n\n  return (\n    <ul>\n      {/* Write your map function here */}\n    </ul>\n  );\n}`
    },
  }
];
// export const CURRICULUM = [
//   {
//     id: 1,
//     title: "JSX Basics",
//     type: "lesson", // Mode: Reading
//     content: `
// # Welcome to JSX
// JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript.
// ### Key Rules:
// * Every tag must be closed.
// * You must return a single parent element.
// * Use **className** instead of **class**.
//     `,
//   },
//   {
//     id: 2,
//     title: "JSX Lab",
//     type: "lab", // Mode: Coding
//     description: "Task: Change the <h1> text to 'Hello ReactLab' and add a <u> tag below it.",
//     initialCode: `export default function App() {\n  return <h1>Change Me</h1>\n}`,
//   },
//   {
//     id: 3,
//     title: "Components",
//     type: "lesson",
//     content: "Components is just function in react They are reusable, independent pieces of UI.React takes this Virtual DOM description, compares it to the actual browser page, and updates only the parts that changed. This makes it much faster than refreshing the whole page"
//   },
//   {
//     id: 4,
//     title: "Components Lab",
//     type: "lab",
//     description: "Create a Header component and nest it inside App.js",
//     initialCode: "function Navbar(){return ()} export default Navbar;",
//   },
//   {
//     id: 5,
//     title: "Props",
//     type: "lesson",
//     content: "Props are like function argumnet in Javascript. Passing Data to Components. It is use to render real time data from user on the website"
//   },
//   {
//     id: 6,
//     title: "Contitonal Rendering",
//     type: "lesson",
//     content: "In React, you can conditionally render components like in if statement to render one function or any other"
//   },
//   {
//     id: 7,
//     title: "Events",
//     type: "lesson",
//     content: "React can perform actions based on user events."
//   },
//   {
//     id: 8,
//     title: "List, Form, Text area, Multiple Inputs"

//   },
//   {
//     id: 9,
//     title: "Portals and Suspence",

//   },
//   {
//     id: 10,
//     title: "CSS Styling"
//   },
//   {
//     id: 11,
//     title: "Router",

//   },
//   {
//     id: 12,
//     title: "Hook",

//   },
//   {
//     id: 13,
//     title: ""
//   }
// ];
const CHALLENGES = {
  counter: {
    "/App.js": `import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`
  },
  todo: {
    "/App.js": `import React from "react";

export default function Todo() { 
  return <h1>Todo Challenge - Start typing here!</h1> 
}`
  }
};