# Day 6 - React Forms & Controlled Components

## Topics Covered

- Controlled Components
- Handling Form Inputs
- Event Object
- `e.target.value`
- Managing Multiple Inputs
- Object State
- Spread Operator in React Forms

---

# What is a Controlled Component?

A controlled component is an input element whose value is controlled by React state instead of the browser.

Instead of the browser storing the current input value, React stores it inside a state variable.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Flow:

User Types
      ↓
onChange Event
      ↓
e.target.value
      ↓
setState()
      ↓
React State Updates
      ↓
Input Value Updates

---

# Why use Controlled Components?

Benefits:

- Single source of truth
- Easy validation
- Easy form submission
- Easy to reset forms
- Predictable UI
- React always knows the current value

---

# Understanding value

```jsx
<input value={name} />
```

The value displayed inside the textbox always comes from React state.

If state changes:

```jsx
setName("Aarav");
```

Input automatically displays:

```
Aarav
```

---

# Understanding onChange

Whenever the user types,

React fires:

```jsx
onChange={(e) => {}}
```

The event object contains information about the event.

For input fields,

```jsx
e.target
```

refers to the input element.

The current text inside the textbox is:

```jsx
e.target.value
```

Example:

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

# Clearing an Input

Since React controls the value,

simply changing the state clears the textbox.

```jsx
setName("");
```

---

# Controlled vs Uncontrolled Inputs

Controlled:

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React controls the value.

---

Uncontrolled:

```jsx
<input />
```

Browser controls the value.

React does not know what the user typed.

---

# Managing Multiple Inputs

Instead of creating separate state variables,

Bad:

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [college, setCollege] = useState("");
```

We group related data.

Better:

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  college: "",
});
```

Benefits:

- Cleaner code
- Easier to manage
- Easier to send to APIs
- Easier to scale

---

# Updating Object State

Suppose current state is

```jsx
{
  name: "",
  email: "",
  college: ""
}
```

This is WRONG:

```jsx
setFormData({
  name: "Aarav"
});
```

React replaces the whole object.

Result:

```jsx
{
  name: "Aarav"
}
```

email and college are lost.

---

# Using the Spread Operator

Correct approach:

```jsx
setFormData({
  ...formData,
  name: "Aarav",
});
```

Spread operator creates a shallow copy of the existing object.

Then only the specified property is updated.

Result:

```jsx
{
  name: "Aarav",
  email: "",
  college: ""
}
```

---

# Updating Form Data

Example:

```jsx
<input
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
/>
```

Pattern:

```jsx
value={formData.FIELD}

onChange={(e)=>
setFormData({
...formData,
FIELD:e.target.value
})
}
```

This same pattern is repeated for every input field.

---

# Live Preview

React state can be displayed anywhere.

Example:

```jsx
<p>Name: {formData.name}</p>
<p>Email: {formData.email}</p>
<p>College: {formData.college}</p>
```

As the user types,

React automatically updates the UI.

---

# Key Takeaways

- Controlled components use React state.
- `value` decides what appears inside the input.
- `onChange` runs whenever the user types.
- `e.target.value` gives the current input value.
- Group related form fields into one object.
- `useState` replaces objects instead of merging them.
- Use the spread operator to preserve existing fields.
- React forms commonly store data inside an object.

---

# Interview Questions

### 1. What is a controlled component?

A controlled component is an input element whose value is controlled by React state instead of the browser.

---

### 2. Why use controlled components?

- Validation
- Predictable UI
- Easy form submission
- Single source of truth

---

### 3. What does `e.target.value` return?

The current value entered inside the input field.

---

### 4. Why is the spread operator used?

To copy the existing object and update only the required property without losing the remaining fields.

---

### 5. What happens if we write?

```jsx
setFormData({
  name: "Aarav"
});
```

The previous object is replaced.

Remaining properties are lost.

---

### 6. Why store form data inside one object?

- Better organization
- Easier management
- Easier API submission
- Cleaner code

---

### 7. What is the difference between controlled and uncontrolled components?

Controlled → React controls the value.

Uncontrolled → Browser controls the value.

---

# Revision

✔ Controlled Components

✔ value

✔ onChange

✔ Event Object

✔ e.target.value

✔ Object State

✔ Spread Operator

✔ Live Form Preview