# React Core Documentation
React is a declarative, component-based JavaScript library for building user interfaces. Below is a breakdown of its fundamental concepts.

## 1. Components :
### What is it?
Components are the building blocks of a React application. They are independent, reusable pieces of UI that function like JavaScript functions but return HTML via JSX.

### Why it exists?
To follow the "Divide and Conquer" principle. Instead of one massive HTML file, you manage small, isolated pieces of code, making the app easier to maintain and scale.

### Tiny Example
```JavaScript
function Welcome() {
return <h1>Hello, World!</h1>;
}
```

### When to use it?
Use them for any UI element that repeats (like a button) or to break down a complex page into manageable sections (like a Sidebar or Navbar).

## 2. JSX (JavaScript XML) :
### What is it?
JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write UI structures directly inside your JavaScript logic.

### Why it exists?
It makes code more readable and visual. Without JSX, you would have to use nested React.createElement() calls, which are difficult to write and maintain.

### Tiny Example
```JavaScript
const element = <div className="container">Welcome to JSX</div>;
```

### When to use it?
Always. It is the standard way to define the UI layout in React components.

## 3. Props :
### What is it?
Short for "properties," props are read-only arguments passed into components, similar to how you pass arguments to a function.

### Why it exists?
Props allow components to be dynamic and reusable by letting the parent component share data with its children.

### Tiny Example
```JavaScript
function User(props) {
return <p>Active User: {props.name}</p>;
}

// Usage: <User name="Your Name" />
```

### When to use it?
Use props whenever a component needs to display data or change behavior based on input from a parent component.

## 4. State :
### What is it?
State is an object that holds information that may change over the lifetime of a component. Unlike props, state is managed inside the component.

### Why it exists?
React needs a way to "remember" things (like input values or toggle status) and automatically re-render the UI when that data changes.

### Tiny Example
```JavaScript
const [count, setCount] = React.useState(0);
// Update: setCount(count + 1)
```
### When to use it?
Use it for data that changes over time due to user interaction, API responses, or form inputs.

## 5. Events :
### What is it?
Events in React are the way you handle user interactions like clicks, mouse moves, or key presses. They are named using camelCase (e.g., onClick).

### Why it exists?
To make the UI interactive. It bridges the gap between the user's physical actions and the code's logic.

### Tiny Example
```JavaScript
<button onClick={() => alert('Clicked!')}>Click Me</button>
```
### When to use it?
Use whenever you need to trigger a function based on a user's action.

## 6. Conditional Rendering :
### What is it?
The ability to render different UI elements depending on certain conditions (using if statements or ternary operators).

### Why it exists?
In dynamic apps, you often need to show or hide things (e.g., showing a "Logout" button only if the user is logged in).

### Tiny Example
```JavaScript
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```
### When to use it?
Use it for toggling visibility, handling loading states, or displaying error messages.

## 7. Lists and Keys :
### What is it?
Lists allow you to render multiple similar components from an array. Keys are unique string attributes you must include when creating lists.

### Why it exists?
Lists handle repetitive data. Keys help React identify which items have changed, been added, or been removed, which is crucial for performance.

### Tiny Example
```JavaScript
const items = ['React', 'Vue', 'Angular'];
return items.map((item, index) => <li key={index}>{item}</li>);
```
### When to use it?
Use lists when mapping over arrays of data. Always provide a unique key (ideally an ID from your data) to maintain UI stability.

## 8. useEffect :
### What is it?
A Hook that allows you to perform "side effects" in functional components.

### Why it exists?
Functional components are meant to be pure. useEffect provides a place to handle things that happen "outside" the return statement, like fetching data or setting up a timer.

### Tiny Example
```JavaScript
useEffect(() => {
console.log("Component mounted!");
}, []); // Empty array means it runs once
```

### When to use it?
Use it for API calls, manual DOM manipulations, subscriptions, or synchronizing a component with an external system.