import { useState } from "react";

function ReactLearner() {
  return <h2>Hello React Learner</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  console.log("App Rendered");

  function handleClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      {/* Counter Example */}
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>+3</button>

      <hr />

      {/* Conditional Rendering with Ternary */}
      <h1>{isLoggedIn ? "Welcome" : "Please Login"}</h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>

      <hr />

      {/* Conditional Rendering with && */}
      {showMessage && <ReactLearner />}

      <button onClick={() => setShowMessage(!showMessage)}>
        Show / Hide Message
      </button>
    </>
  );
}

export default App;
