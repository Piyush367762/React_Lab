
export const CURRICULUM = [
  // --- PHASE 1: UI FUNDAMENTALS ---
  {
    id: "jsx-lesson",
    title: "1. JSX Basics",
    type: "lesson",
    content: `
# Welcome to JSX
JSX stands for JavaScript XML. It allows us to write HTML directly inside JavaScript, making it easier to build user interfaces and it is resusable.
 
### Key Rules to Remember:

1. **One Root Element:** A component can only return one single parent element. If you have siblings, wrap them in a \`<div>\` or a Fragment \`<>\` \`</>\`.
2. **CamelCase Attributes:** Use \`className\` instead of \`class\`, and \`htmlFor\` instead of \`for\`.
3. **Close Every Tag:** Even empty tags like \`<img>\` or \`<br>\` must be closed like \`<img />\`.
4. **Export when a file have multiple helper function** and Export default when you have single function
   while importing if used export default then you renamed it like \n
  export default function MyComponent() {\n
  return <h1>Hello</h1>;\n
  }\n
   import Anything from "./MyComponent";\n
   but it you have used only export then you have to used the same function named you give to the file in the curly bracket\n
   export function Header() \n
   import { Header } from "./Header":
`
   
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
A Component is just a JavaScript function that returns JSX. They are reusable, independent pieces of UI.

React takes this Virtual DOM description, compares it to the actual browser page, and updates only the parts that changed. This makes it much faster than refreshing the whole page.

**Rule:** Component names **MUST** start with a capital letter (e.g., \`Header\`, not \`header\`), otherwise React thinks it's a standard HTML tag.
    Classical way to use is using arrow function ()=>{} in arrow function there is instrtic return implied thus easy to use`,
   
  },
  {
    id: "comp-lab",
    title: "Lab: Broken Components",
    type: "lab",
    description: "Task: We are trying to render a Navbar and a Footer inside the App, but nothing is showing up! Fix the component names and make sure they return JSX properly.",
    files: {
      "/App.js": `function navbar() {\n  return <nav>My Website Navigation</nav>;\n}\nconst Header = () => <p>header</p>;
\nfunction Footer() {\n  <p>Copyright 2026</p>; // Missing something here?\n}\n\nexport default function App() {\n  return (\n    <div>\n      <navbar />\n   <Header/>   <main><h1>Welcome! </h1></main>\n      <Footer />\n    </div>\n  );\n}`
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
Data can come from: \nHardcoded values\n Arrays/Objects \n Parent component state \n External source(API call)
    `,
  },
  {
    id: "props-lab",
    title: "Lab: Passing Props",
    type: "lab",
    description: "Task: The 'ProfileCard' is expecting a 'username' and 'role' prop, but it's currently receiving the wrong data. Fix the App component to pass the correct props.",
    files: {
      "/App.js": `
      //array is created like (key,value) pair 
      const users = [
  { username: "Alice", country: "USA", source: "Web", income: 5000, role: "Admin" },
  { username: "Bob", country: "India", source: "Mobile", income: 3000, role: "User" },
  { username: "Charlie", country: "UK", source: "Tablet", income: 4000, role: "Moderator" }
];
//as there is add username and country similarly add source income and role
// also add style.css div border 
function ProfileCard({ username, country }) {
  return (
    <div className="card">
      <h3>User: {username}</h3>
      <h4>Country: {country}</h4>
     
    </div>
  );
}

<ProfileCard username="Alice" country="USA">
  <p>Extra info: Loves coding!</p>
</ProfileCard>

    /*<ProfileCard {...user} /> uses the spread operator \n ...user spreads all properties of the object as props.*/
    /*it is equivalent to <ProfileCard \n username={user.username} \n country={user.country} \n */
export default function App() {
  return (
    <div>
      //in map we pass object(array) and index (0,1,2,...)
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
}
`
      
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
    `
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
*  Correct: \`onClick={handleClick}\`
* Incorrect: \`onClick={handleClick()}\` (This runs the moment the page loads!)
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
HOOKS 
Special function that let use state and lifecycle inside function components
example useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect

Props allow you to pass data, but what if a component needs to change its own data (like a counter or a typed input)? That's where **State** comes in.
Props = data from parent → child (read-only).
State = data inside a component (mutable with setState).

updates are asynchronous 
It communicates with backend via backend API

We use the \`useState\` Hook. It gives us two things:
1. The current value.
2. A function to update that value.

**Crucial:** NEVER modify state directly (e.g., \`count = count + 1\`). Always use the setter function (\`setCount(count + 1)\`), otherwise React won't know it needs to update the screen!
    `
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
    `
  },
  {
    id: "lists-lab",
    title: "Lab: Missing Keys",
    type: "lab",
    description: "Task: Map over the 'groceries' array to display an <li> for each item. Make sure to assign a unique 'key' to prevent React console warnings!",
    files: {
      "/App.js": `export default function App() {\n  const groceries = [\n    { id: 1, name: "Apples" },\n    { id: 2, name: "Bananas" },\n    { id: 3, name: "Bread" }\n  ];\n\n  return (\n    <ul>\n      {/* Write your map function here */}\n    </ul>\n  );\n}`
    },
  },
  {
  id: "project",
  title: "multiple file system",
  type: "lab",
  description: "understand that",
  files: {
  "/App.js": `import Header from "/Header.js";
import Footer from "/Footer.js";
import "/styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}`,
  "/Header.js": `export default function Header() {
    return <header>My Header</header>;
  }`,
  "/Footer.js": `export default function Footer() {
    return <footer>My Footer</footer>;
  }`,
  "/styles.css": `body { font-family: sans-serif; }`
}
  },
  {
      id: "project",
  title: "todo",
  type: "lab",
  description: "dependency resolution correction",
  files:{
     "/App.js" : `import TodoApp from "./pages/TodoApp";
    
<Route path="/practice/todo" element={<TodoApp />} />`,
    "src/pages/Todo.jsx" : `import { useState, useEffect } from "react";
import "./Todo.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE + UPDATE
  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    if (editId) {
      // UPDATE
      setTodos(todos.map(todo =>
        todo.id === editId ? { ...todo, text: input } : todo
      ));
      setEditId(null);
    } else {
      // CREATE
      const newTodo = {
        id: Date.now(),//stored timestamp also different id produce
        text: input,
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  }

  // DELETE
  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // EDIT
  function handleEdit(todo) {
    setInput(todo.text);
    setEditId(todo.id);
  }

  return (
    <div className="todo-container">
      <h1>Todo Lab</h1>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <div className="actions">
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}`,"src/pages/Todo.css" : `.todo-container {
  max-width: 500px;
  margin: 50px auto;
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
  color: #e2e8f0;
}

h1 {
  text-align: center;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-form input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: none;
}

.todo-form button {
  padding: 10px 15px;
  background: #3b82f6;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  background: #020617;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.actions button {
  margin-left: 5px;
  background: #334155;
  border: none;
  padding: 5px 10px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.actions button:hover {
  background: #475569;
}
  `
  
  }
  }
];
