import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";

// function Navbar(){
//   return <h1>This is my Navbar</h1>
// }

function Hero() {
  return <h1>This is my Hero</h1>;
}

function Footer() {
  return <h1>This is my Footer</h1>;
}

function Student({name,college}) {
  return <h2>{name}-{college}</h2>;
}
function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid white",
        padding: "10px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}
function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <Hero />

      <Student name="Aarav" college="VIT" />
      <Student name="John" college="BIT" />
      <Student name="Sarah" college="NIT" />

      <Card>
        <Student name="Aarav" college="VIT" />
      </Card>

    </>
  );
}

export default App;
