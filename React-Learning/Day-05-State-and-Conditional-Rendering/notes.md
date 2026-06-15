# Day 5 - State, Events and Conditional Rendering

## What I Learned Today

Today I learned how React components manage their own changing data using State.

I learned how React re-renders components when state changes, how event handling works, and how different UI can be displayed based on conditions.

---

## Why State?

Props are read-only.

Example:

```jsx
<Student name="Aarav" />
```

The component receives data but cannot modify it.

For data that changes over time, React provides State.

Examples:

- Counter
- Login Status
- Theme Toggle
- Shopping Cart
- Form Inputs

State stores data that belongs to a component and can change over time.

---

## What is State?

State is a component's memory.

Example:

```jsx
const [count, setCount] = useState(0);
```

Here:

```jsx
count
```

stores the current value.

```jsx
setCount
```

updates the value.

Initial value:

```text
0
```

---

## useState()

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Breakdown:

### count

Stores the current value.

Example:

```text
0
1
2
3
```

### setCount

Function used to update the value.

Example:

```jsx
setCount(10);
```

Output:

```text
10
```

---

## State vs Props

| Props | State |
|---------|---------|
| Passed by Parent | Owned by Component |
| Read-only | Can Change |
| Used for Communication | Used for Local Data |
| Cannot be Modified by Child | Updated using Setter Function |

---

## Why Normal Variables Don't Work

Example:

```jsx
let count = 0;

count++;
```

React does not know the value changed.

The UI will not update automatically.

---

### State Variable

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

React knows the state changed.

Flow:

```text
State Changed
      ↓
Component Re-renders
      ↓
UI Updates
```

---

## Re-rendering

When state changes:

```jsx
setCount(1);
```

React does not directly update the DOM.

Actual process:

```text
State Changes
      ↓
Component Function Runs Again
      ↓
New JSX Returned
      ↓
React Updates UI
```

This process is called Re-rendering.

---

## Observing Re-renders

Example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return <h1>{count}</h1>;
}
```

Every state update causes:

```text
App Rendered
```

to appear again in the console.

This proves the component function runs again.

---

## Event Handling

React events are passed as props.

Example:

```jsx
<button onClick={handleClick}>
  Increase
</button>
```

When the button is clicked:

```jsx
handleClick()
```

is executed.

---

### Common Events

```jsx
onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
```

---

## Updating State

Example:

```jsx
const [count, setCount] = useState(0);

setCount(1);
```

Flow:

```text
count = 0
      ↓
setCount(1)
      ↓
count = 1
      ↓
Re-render
      ↓
UI Updates
```

---

## Functional Updates

Problem:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

If:

```text
count = 0
```

React receives:

```jsx
setCount(1);
setCount(1);
setCount(1);
```

Result:

```text
1
```

---

### Solution

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Flow:

```text
prev = 0 → 1
prev = 1 → 2
prev = 2 → 3
```

Result:

```text
3
```

---

### When to Use Functional Updates

Whenever the new state depends on the previous state.

Examples:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev - 1);
setCount(prev => prev * 2);
```

---

## Conditional Rendering

Conditional Rendering means displaying different UI based on a condition.

Example:

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

### Ternary Operator

Syntax:

```jsx
condition ? value1 : value2
```

Example:

```jsx
{
  isLoggedIn
    ? <h1>Welcome</h1>
    : <h1>Please Login</h1>
}
```

Output:

```text
Please Login
```

when:

```jsx
isLoggedIn = false
```

Output:

```text
Welcome
```

when:

```jsx
isLoggedIn = true
```

---

## Toggle State

Example:

```jsx
setIsLoggedIn(!isLoggedIn);
```

Meaning:

```text
true → false
false → true
```

Used for:

- Dark Mode
- Login Status
- Show / Hide Components
- Menus
- Modals

---

## Conditional Rendering with &&

Instead of:

```jsx
{
  showMessage
    ? <Message />
    : null
}
```

We can write:

```jsx
{
  showMessage && <Message />
}
```

Meaning:

```text
If true → Render Component
If false → Render Nothing
```

---

## Example: Show / Hide Message

```jsx
const [showMessage, setShowMessage] = useState(false);
```

Render:

```jsx
{
  showMessage && <ReactLearner />
}
```

Toggle:

```jsx
<button
  onClick={() =>
    setShowMessage(!showMessage)
  }
>
  Show / Hide
</button>
```

---

## Things I Discovered

- State is component-owned data.
- State can change over time.
- React re-renders when state changes.
- Normal variables do not trigger re-renders.
- Event handlers are functions passed to event props.
- Functional updates use the latest state value.
- Conditional rendering changes UI based on state.
- The `!` operator is commonly used for toggles.
- `&&` can be used to render components conditionally.

---

## Interview Perspective

### What is State?

State is data owned by a component that can change over time. When state changes, React re-renders the component and updates the UI.

---

### Why do we use useState()?

useState allows React components to store and update data that changes during the component's lifecycle.

---

### What causes a React Re-render?

A React component re-renders when its state changes.

---

### Why doesn't a normal variable update the UI?

React only tracks state changes. Normal variables are not monitored by React.

---

### What is a Functional Update?

A functional update receives the latest state value and returns the new state.

Example:

```jsx
setCount(prev => prev + 1);
```

---

### When should Functional Updates be used?

Whenever the new state depends on the previous state.

---

### What is Conditional Rendering?

Conditional Rendering is displaying different UI based on a condition.

---

### Difference Between ? : and &&

Ternary:

```jsx
condition ? A : B
```

Used when both true and false cases exist.

AND Operator:

```jsx
condition && A
```

Used when only the true case should be rendered.

---

## Revision Questions

1. What is State?
2. Why do we need State?
3. What does useState() return?
4. What is the difference between Props and State?
5. Why do normal variables not update the UI?
6. What is a React Re-render?
7. What causes a component to re-render?
8. What is Event Handling?
9. What is a Functional Update?
10. Why does `setCount(count + 1)` sometimes fail?
11. When should `setCount(prev => prev + 1)` be used?
12. What is Conditional Rendering?
13. What is the Ternary Operator?
14. What is Conditional Rendering using &&?
15. How does Toggle State work?

---

## Key Takeaways

- State stores changing data.
- useState creates state variables.
- setState updates state.
- State changes trigger re-renders.
- Re-renders update the UI.
- Event handlers respond to user actions.
- Functional updates use the latest state value.
- Conditional rendering controls what appears on screen.
- Toggle state is a common React pattern.
- State is one of the most important concepts in React.