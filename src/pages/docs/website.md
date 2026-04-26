here we are going to understand event loop
and microtask queue and how does website is loading into user system


The event loop is mechanism that coordinate the execution of js in browser

Call Stack (synchronous code)
Task Queue (macrotask setTimeout and DOM events)
Microtask queue (Promise , queueMicrotask)


Microtask Queue
Holds callbacks scheduled by Promises and MutationObserver.

Runs immediately after the current synchronous code finishes, before timers or UI events.


Loading a Website vs Downloading a File
When you request a website:

Client request → Browser sends HTTP request to server.

Response → Server sends HTML, CSS, JS, images, etc.

Browser rendering pipeline:

Parses HTML into DOM.

Parses CSS into CSSOM.

Runs JavaScript via the event loop.

Combines DOM + CSSOM → Render tree → Paint → Composite.

Storage on Client
Website resources (HTML, JS, CSS, images) are downloaded into memory and sometimes cached on disk (browser cache).

They are not “installed” like a file; they’re transient unless cached.

When you close the tab, most resources in memory are released. Cached files may remain temporarily for faster reloads.


sync
microtask
macrotask

1) Run synchronous code (everything currently on the call stack).

2) Drain the microtask queue completely (Promises, queueMicrotask, MutationObserver).

3) Render updates (browser paints changes).

4) Run one macrotask (timers, I/O, UI events).

5) Repeat.


function getUserName() {
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.placeholder = "Enter your name";
    document.body.appendChild(input);

    input.addEventListener("change", () => {
      console.log("Macrotask: input event fired");
      resolve(input.value); // schedules a microtask
    });
  });
}

async function showUserName() {
  const name = await getUserName();
  console.log("Microtask: Promise resolved with", name);
}
showUserName();
Flow:
Input box appears (sync).

Browser keeps running other tasks (timers, rendering).

User types and presses Enter → macrotask: input event.

Inside event handler → resolve() → schedules microtask.

Event loop finishes the macrotask, then runs the microtask → resumes await

1. Call Stack (Sync Execution)
The browser embeds a JavaScript engine (e.g., V8).

When a script runs, functions are pushed onto the call stack.

The engine executes them line by line until the stack is empty.

2. Task Queues
The browser maintains two main queues:

Macrotask queue: timers (setTimeout), DOM events, network callbacks.

Microtask queue: Promises, queueMicrotask, MutationObserver.

3. Event Loop Cycle
The event loop is literally a loop in C++ inside the engine:

while (true) {
    // 1. Run everything in the call stack
    executeCallStack();

    // 2. Drain microtask queue completely
    while (!microtaskQueue.empty()) {
        auto task = microtaskQueue.pop();
        runTask(task);
    }

    // 3. Render updates (layout, paint, composite)
    renderFrame();

    // 4. Run one macrotask (like a timer or I/O event)
    if (!macrotaskQueue.empty()) {
        auto task = macrotaskQueue.pop();
        runTask(task);
    }
}
