# Day 2 - React Project Structure & Rendering Flow

## What I Learned Today

Today I learned how a React application starts, how React connects with the browser, and how components are rendered.

---

## Core Concepts

### Root Element

```html
<div id="root"></div>
```

The root element is the container where React mounts the application.

Without it, React would not know where to render components.

---

### main.jsx

```jsx
createRoot(document.getElementById('root')).render(
  <App />
)
```

main.jsx is the entry point of a React application.

Responsibilities:

- Find root element
- Create React root
- Render App component

---

### App Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

App is a React component.

It returns a description of the UI.

---

### Component Naming Convention

React components use PascalCase.

```jsx
<App />
<Navbar />
<Footer />
```

HTML elements use lowercase.

```jsx
<div>
<h1>
<p>
```

---

### Introduction to State

```jsx
const [count, setCount] = useState(0);
```

count stores the current value.

setCount updates the value.

When state changes, React updates the UI automatically.

---

## Interview Perspective

### What is the role of main.jsx?

main.jsx is the entry point of the React application. It connects React to the root DOM element and renders the App component.

---

### What is the purpose of div#root?

The root element acts as the mounting point where React renders the entire application.

---

### What is State?

State is data managed by a component that can change over time. When state changes, React re-renders the component and updates the UI.

---

## Things I Discovered

- React applications start from main.jsx.
- React renders components inside div#root.
- App.jsx exports the root component.
- count stores data.
- setCount updates data.
- React updates the UI automatically after state changes.

---

## Common Mistakes

- Confusing App component with an HTML tag.
- Thinking count updates the UI directly.
- Forgetting that React components use PascalCase.
- Assuming React renders without a root element.

---

## Revision Questions

1. What is the purpose of div#root?
2. What is the role of main.jsx?
3. What does createRoot() do?
4. What is App.jsx?
5. Why do React components use PascalCase?
6. What does count store?
7. What does setCount() do?
8. Why does React update the UI automatically?

---

## Key Takeaways

- React applications start from main.jsx.
- React renders inside div#root.
- App is a React component.
- Components use PascalCase.
- State stores changing data.
- setCount updates state.
- React automatically updates the UI.