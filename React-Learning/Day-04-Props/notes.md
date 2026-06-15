# Day 4 - Props

## What I Learned Today

Today I learned how React components can receive data from other components using Props.

Props make components dynamic and reusable by allowing different data to be passed into the same component.

---

## Why Props?

Without Props:

```jsx
function Student() {
  return <h2>Aarav - VIT</h2>;
}
```

The component is hardcoded.

To display different students, we would need multiple components.

Props solve this problem by allowing data to be passed into a component.

---

## What are Props?

Props (Properties) are read-only data passed from a Parent Component to a Child Component.

Example:

```jsx
function Student(props) {
  return <h2>{props.name}</h2>;
}
```

Usage:

```jsx
<Student name="Aarav" />
<Student name="John" />
<Student name="Sarah" />
```

Output:

```text
Aarav
John
Sarah
```

---

## How Props Work

Example:

```jsx
<Student name="Aarav" />
```

React internally creates something similar to:

```js
{
  name: "Aarav";
}
```

Inside the component:

```jsx
function Student(props) {
  return <h2>{props.name}</h2>;
}
```

`props.name` becomes:

```text
Aarav
```

---

## Parent to Child Data Flow

Example:

```jsx
function App() {
  return <Student name="Aarav" />;
}
```

```jsx
function Student(props) {
  return <h2>{props.name}</h2>;
}
```

Flow:

```text
App (Parent)
      ↓
name="Aarav"
      ↓
Student (Child)
      ↓
Displays Aarav
```

Data flows from Parent → Child.

This is called One-Way Data Flow.

---

## Props are Read Only

Props should never be modified.

Incorrect:

```jsx
function Student(props) {
  props.name = "John";
}
```

Props belong to the Parent Component.

Child Components only receive and use them.

---

## Props Destructuring

Instead of:

```jsx
function Student(props) {
  return <h2>{props.name}</h2>;
}
```

We can write:

```jsx
function Student({ name }) {
  return <h2>{name}</h2>;
}
```

This is called Destructuring.

It makes the code cleaner and easier to read.

---

## Multiple Props

Example:

```jsx
function Student({ name, college }) {
  return (
    <h2>
      {name} - {college}
    </h2>
  );
}
```

Usage:

```jsx
<Student name="Aarav" college="VIT" />
<Student name="John" college="BIT" />
<Student name="Sarah" college="NIT" />
```

Output:

```text
Aarav - VIT
John - BIT
Sarah - NIT
```

---

## Different Types of Props

### String

```jsx
<Student name="Aarav" />
```

### Number

```jsx
<Student age={21} />
```

### Boolean

```jsx
<Student isStudent={true} />
```

### Array

```jsx
<Student skills={["React", "Node"]} />
```

### Object

```jsx
<Student user={{ name: "Aarav" }} />
```

---

## Children Prop

React provides a special prop called `children`.

Example:

```jsx
<Card>Hello World</Card>
```

React internally creates something similar to:

```js
{
  children: "Hello World";
}
```

---

### Using Children

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Usage:

```jsx
<Card>
  <h1>Hello React</h1>
</Card>
```

Output:

```text
Hello React
```

---

## Why Children is Useful

The same component can render different content.

Examples:

```jsx
<Card>
  <h1>Profile</h1>
</Card>
```

```jsx
<Card>
  <button>Submit</button>
</Card>
```

```jsx
<Card>
  <Student name="Aarav" college="VIT" />
</Card>
```

The Card component stays the same.

Only the content changes.

---

## Default Values for Props

Problem:

```jsx
<Student />
```

with:

```jsx
function Student({ name, college }) {
  return (
    <h2>
      {name} - {college}
    </h2>
  );
}
```

Output:

```text
-
```

because both values are undefined.

---

### Solution

```jsx
function Student({ name = "Unknown", college = "Not Provided" }) {
  return (
    <h2>
      {name} - {college}
    </h2>
  );
}
```

Now:

```jsx
<Student />
```

Output:

```text
Unknown - Not Provided
```

This provides a better user experience.

---

## Things I Discovered

- Props make components reusable.
- Props allow dynamic data.
- Props flow from Parent to Child.
- Props are read-only.
- Destructuring makes props easier to use.
- Components can receive multiple props.
- React automatically provides the children prop.
- Children allows reusable wrapper components.
- Default values help handle missing data.

---

## Interview Perspective

### What are Props?

Props are read-only data passed from a Parent Component to a Child Component.

---

### Why do we use Props?

Props make components reusable and dynamic by allowing different data to be passed into the same component.

---

### What is One-Way Data Flow?

Data flows from Parent Components to Child Components through Props.

---

### What is Props Destructuring?

Props Destructuring is extracting values directly from the props object.

Example:

```jsx
function Student({ name }) {
  return <h2>{name}</h2>;
}
```

---

### What is the Children Prop?

Children is a special React prop that represents the content placed between a component's opening and closing tags.

---

### Why is Children Useful?

It allows components to act as reusable wrappers around different content.

---

## Revision Questions

1. What are Props?
2. Why do we use Props?
3. How are Props passed to a component?
4. What is One-Way Data Flow?
5. Why are Props read-only?
6. What is Props Destructuring?
7. How do you pass multiple props?
8. What types of values can be passed as props?
9. What is the Children Prop?
10. Why is the Children Prop useful?
11. What happens if a prop is not provided?
12. How can default values be assigned to props?

---

## Key Takeaways

- Components are reusable UI templates.
- Props provide data to components.
- Props make components dynamic.
- Data flows from Parent to Child.
- Props are read-only.
- Destructuring improves readability.
- Children enables reusable wrapper components.
- Default values improve user experience.
