# Why React?

React was created to make building user interfaces easier, especially for large and dynamic applications.

In traditional JavaScript applications, developers often have to manually update the DOM whenever data changes. As applications grow, this becomes difficult to manage and maintain.

React introduces a component-based architecture and a declarative approach to UI development. Developers describe how the UI should look based on data, and React handles updating the DOM efficiently.

This results in:
- Less manual DOM manipulation
- Better code organization
- Reusable UI components
- Easier maintenance
- Improved developer productivity

---

## Problems with Vanilla JavaScript

As applications grow larger, managing the UI with vanilla JavaScript becomes difficult.

When data changes, developers often need to manually find and update multiple DOM elements. This can lead to repetitive code, bugs, and maintenance issues.

Example:

Profile Picture Changed
        ↓
Update Navbar Image
        ↓
Update Profile Page Image
        ↓
Update Comments Image
        ↓
Update Messages Image

The developer has to remember every place that depends on that data.

---

## What React Solves

React allows developers to describe the UI based on data.

When data changes, React updates the necessary parts of the interface automatically, reducing manual DOM manipulation.

React Approach:

Profile Picture Changed
        ↓
State Updates
        ↓
React Re-renders Affected Components

The developer focuses on data, React handles the DOM updates.

---

## Why Components?

Components help us create reusable pieces of UI.

Benefits:

- Follow the DRY (Don't Repeat Yourself) principle
- Easier maintenance
- Better organization of code
- Reusable across the application

Example Components:

- Navbar
- Footer
- VideoCard
- ProfileCard
- Sidebar

Instead of writing the same UI multiple times, we create one component and reuse it wherever needed.

---

## What is a Component?

A component is a JavaScript function that returns a description of the UI.

Example:

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

Unlike normal JavaScript functions that usually return data (numbers, strings, objects, arrays), React components return UI.

---

## What is JSX?

JSX stands for JavaScript XML.

It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello World</h1>;
```

JSX makes React code easier to read and write.

Behind the scenes, JSX is converted into JavaScript using Babel.

---

## Why JSX?

Without JSX:

```js
React.createElement("h1", null, "Hello");
```

With JSX:

```jsx
<h1>Hello</h1>
```

JSX makes React code more readable and easier to write.

---

## JSX is Not HTML

JSX looks similar to HTML but follows React-specific rules.

Example:

HTML:

```html
<label for="name">Name</label>
```

JSX:

```jsx
<label htmlFor="name">Name</label>
```

---

## JSX Rules

### Single Parent Element

A React component must return a single parent element.

Valid:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
```

Invalid:

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}
```

### JavaScript Expressions in JSX

JavaScript can be written inside JSX using curly braces `{}`.

Example:

```jsx
const name = "Aarav";

<h1>Hello {name}</h1>
```

Output:

```text
Hello Aarav
```

More Examples:

```jsx
{5 + 5}
{"React".toUpperCase()}
{name}
```

---

## Fragments

Fragments allow multiple elements to be grouped without adding an extra HTML element to the DOM.

Example:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
```

Fragments help keep the DOM cleaner while still satisfying React's requirement of having a single parent element.

---

## Key Takeaways

- React was created to simplify UI development.
- React follows a declarative approach.
- Developers focus on data, React updates the UI.
- Components are reusable pieces of UI.
- Components help reduce code duplication and improve maintainability.
- JSX makes React code easier to read and write.
- JSX allows JavaScript expressions using `{}`.
- Fragments help avoid unnecessary DOM elements.

---

## Questions for Revision

1. Why was React created?
2. What problems exist with vanilla JavaScript in large applications?
3. What does React solve?
4. What is declarative UI?
5. What is a component?
6. Why are components reusable?
7. How are React components different from normal JavaScript functions?
8. What is JSX?
9. Why was JSX introduced?
10. Is JSX the same as HTML?
11. Why do we use curly braces `{}` in JSX?
12. What is a Fragment?
13. When would you use a Fragment instead of a div?