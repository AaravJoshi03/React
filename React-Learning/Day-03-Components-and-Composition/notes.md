# Day 3 - Components and Component Composition

## What I Learned Today

Today I learned how React applications are built using components.

I created my own components, rendered them inside the App component, moved components into separate files, and learned how import/export works in React.

---

## What is a Component?

A React component is a reusable JavaScript function that returns a description of the UI.

Example:

```jsx
function Navbar() {
  return <h1>This is my Navbar</h1>;
}
```

React renders the UI returned by the component.

---

## Creating Components

Example:

```jsx
function Navbar() {
  return <h1>This is my Navbar</h1>;
}

function Hero() {
  return <h1>This is my Hero</h1>;
}

function Footer() {
  return <h1>This is my Footer</h1>;
}
```

Each component is responsible for a specific part of the UI.

---

## Rendering Components

Components can be rendered inside other components.

Example:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
```

React renders components in the order they appear.

Output:

```text
This is my Navbar
This is my Hero
This is my Footer
```

---

## Parent and Child Components

Example:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
```

Component Tree:

```text
App
├── Navbar
├── Hero
└── Footer
```

Here:

- App is the Parent Component
- Navbar is a Child Component
- Hero is a Child Component
- Footer is a Child Component

---

## Component Composition

Component Composition means combining smaller components to create larger UI structures.

Example:

```text
App
├── Navbar
├── Hero
└── Footer
```

Instead of creating one large file, React applications are built by composing smaller components together.

Benefits:

- Better readability
- Better maintainability
- Easier debugging
- Reusability
- Team collaboration

---

## Why Separate Components Into Different Files?

Bad:

```text
App.jsx
(1000+ lines)
```

Good:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   └── Footer.jsx
│
└── App.jsx
```

Benefits:

- Cleaner code
- Easier maintenance
- Easier debugging
- Better project structure
- Reusable components

---

## Exporting Components

Example:

```jsx
function Navbar() {
  return <h1>This is my Navbar</h1>;
}

export default Navbar;
```

Purpose:

Makes the component available to other files.

---

## Importing Components

Example:

```jsx
import Navbar from "./components/Navbar";
```

Purpose:

Allows App.jsx to use the Navbar component.

---

## Component Flow

Example:

Navbar.jsx

```jsx
function Navbar() {
  return <h1>This is my Navbar</h1>;
}

export default Navbar;
```

App.jsx

```jsx
import Navbar from "./components/Navbar";

function App() {
  return <Navbar />;
}
```

Flow:

```text
Navbar.jsx
     ↓
export default Navbar
     ↓
App.jsx
     ↓
import Navbar
     ↓
<Navbar />
     ↓
Rendered UI
```

---

## Component Naming Convention

React components use PascalCase.

Example:

```jsx
function Navbar() {
  return <h1>Navbar</h1>;
}
```

Used as:

```jsx
<Navbar />
```

HTML elements use lowercase:

```jsx
<div>
<h1>
<p>
```

---

## Things I Discovered

- Components are reusable JavaScript functions.
- Components return UI.
- Components can render other components.
- App can act as a parent component.
- React renders components in the order they appear.
- Components are usually stored in separate files.
- export makes components available outside the file.
- import allows components to be used in another file.
- Large React applications are built using component composition.

---

## Interview Perspective

### What is a React Component?

A React component is a reusable JavaScript function that returns a description of the UI.

---

### What is Component Composition?

Component Composition is the process of combining smaller components to create larger and more complex user interfaces.

---

### What is the difference between Parent and Child Components?

A Parent Component renders other components.

A Child Component is rendered inside another component.

---

### Why do we separate components into different files?

To improve maintainability, readability, reusability, debugging, and project organization.

---

### What is the purpose of export default?

It exposes a component so that other files can import and use it.

---

### What is the purpose of import?

It allows a component from another file to be used in the current file.

---

## Revision Questions

1. What is a React Component?
2. Why are components useful?
3. What is Component Composition?
4. What is a Parent Component?
5. What is a Child Component?
6. Why should components be moved into separate files?
7. What is the purpose of export default?
8. What is the purpose of import?
9. Why do React components use PascalCase?
10. How does React render components?
11. What are the benefits of component-based architecture?

---

## Key Takeaways

- Components are reusable UI building blocks.
- React applications are built using components.
- Components can contain other components.
- Parent components render child components.
- Component composition helps build complex UIs.
- Components should be organized into separate files.
- export and import allow components to be shared between files.
- React follows a component-based architecture.