import { useState } from "react";
import "./App.css";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h1>React Forms - Controlled Components</h1>

      <hr />

      <h2>Student Registration Form</h2>

      <div>
        <label>Name</label>
        <br />
        <input
        name = "name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input
        name = "email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>College</label>
        <br />
        <input
        name = "college"
          type="text"
          placeholder="Enter your college"
          value={formData.college}
          onChange={handleChange}
        />
      </div>

      <hr />

      <h2>Live Preview</h2>

      <p>
        <strong>Name:</strong> {formData.name}
      </p>

      <p>
        <strong>Email:</strong> {formData.email}
      </p>

      <p>
        <strong>College:</strong> {formData.college}
      </p>
    </>
  );
}

export default App;
