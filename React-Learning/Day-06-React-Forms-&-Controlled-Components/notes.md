# Day 6 - React Forms & Controlled Components

## Topics Covered

- Controlled Components
- Controlled vs Uncontrolled Inputs
- Handling Form Inputs
- Event Object
- `e.target.value`
- Managing Multiple Inputs
- Object State
- Spread Operator
- Generic `handleChange()`
- Computed Property Names

---

# What is a Controlled Component?

A controlled component is an input element whose value is controlled by React state instead of the browser.

Instead of the browser storing the current input value, React stores it inside a React state variable.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Flow:

```
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
```

---

# Why use Controlled Components?

Benefits:

- Single source of truth
- Easy validation
- Easy form submission
- Easy to reset forms
- Predictable UI
- React always knows the latest input value

---

# Understanding `value`

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

# Understanding `onChange`

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

changing the state automatically clears the textbox.

```jsx
setName("");
```

---

# Controlled vs Uncontrolled Inputs

### Controlled

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React controls the input value using state.

---

### Uncontrolled

```jsx
<input />
```

The browser manages the input value internally.

React does not control or automatically track the value through state.

---

# Managing Multiple Inputs

Instead of creating multiple state variables,

❌ Bad

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [college, setCollege] = useState("");
```

✅ Better

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  college: "",
});
```

Benefits:

- Cleaner code
- Easier management
- Easier API submission
- Better scalability
- Related data stays together

---

# Updating Object State

Suppose the current state is

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

React replaces the entire object.

Result:

```jsx
{
  name: "Aarav"
}
```

The `email` and `college` properties are lost.

---

# Using the Spread Operator

Correct approach:

```jsx
setFormData({
  ...formData,
  name: "Aarav",
});
```

The spread operator creates a **shallow copy** of the existing object and preserves all existing properties before updating only the specified property.

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

onChange={(e) =>
  setFormData({
    ...formData,
    FIELD: e.target.value,
  })
}
```

This same pattern is repeated for every input field.

---

# Generic `handleChange()` Function

Instead of writing separate `onChange` handlers for every input field, we can create one reusable function.

```jsx
function handleChange(e) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
}
```

Each input provides its own `name` attribute.

Example:

```jsx
<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
```

When typing:

```
e.target.name  → "email"
e.target.value → "abc@gmail.com"
```

React updates:

```jsx
email: "abc@gmail.com"
```

without requiring a separate function.

---

# Computed Property Names

Normally,

```jsx
{
  name: "Aarav"
}
```

creates a property literally named `name`.

Using square brackets:

```jsx
{
  [name]: value
}
```

JavaScript first evaluates the variable.

Example:

```jsx
const name = "email";
```

Then,

```jsx
{
  [name]: "abc@gmail.com"
}
```

becomes

```jsx
{
  email: "abc@gmail.com"
}
```

This feature is called **Computed Property Names**.

It allows a single function to update different properties dynamically.

---

# Final Form Pattern

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  college: "",
});

function handleChange(e) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
}
```

This is one of the most common patterns used in React applications.

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

React automatically re-renders the UI with the latest values.

---

# Key Takeaways

- Controlled components use React state.
- `value` decides what appears inside the input.
- `onChange` runs whenever the user types.
- `e.target.value` gives the current input value.
- Group related form fields into a single object.
- `useState` replaces objects instead of merging them.
- Use the spread operator to preserve existing properties.
- Use computed property names (`[name]`) to update object properties dynamically.
- One `handleChange()` function can manage multiple input fields.

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

To copy the existing object and update only the required property while preserving the remaining properties.

---

### 5. What happens if we write?

```jsx
setFormData({
  name: "Aarav"
});
```

The previous object is replaced, causing the other properties to be lost.

---

### 6. Why store form data inside one object?

- Better organization
- Easier management
- Cleaner code
- Easier API submission
- Better scalability

---

### 7. What is the difference between controlled and uncontrolled components?

Controlled → React controls the input value through state.

Uncontrolled → The browser manages the input value internally.

---

### 8. Why do we use `[name]` instead of `name`?

`name` creates a property literally called `name`.

`[name]` tells JavaScript to evaluate the variable first and use its value as the property name.

Example:

```jsx
const name = "email";

{
  [name]: "abc@gmail.com"
}
```

becomes

```jsx
{
  email: "abc@gmail.com"
}
```

This allows one `handleChange()` function to update different fields dynamically.

---

# Common Mistakes

❌ Forgetting the `name` attribute while using `handleChange()`.

❌ Replacing the entire object instead of using the spread operator.

❌ Writing

```jsx
name: value
```

instead of

```jsx
[name]: value
```

❌ Mutating state directly instead of using `setFormData()`.

---

# Revision Checklist

- [x] Controlled Components
- [x] Controlled vs Uncontrolled Inputs
- [x] `value`
- [x] `onChange`
- [x] Event Object
- [x] `e.target.value`
- [x] Object State
- [x] Spread Operator
- [x] Generic `handleChange()`
- [x] Computed Property Names
- [x] Live Form Preview