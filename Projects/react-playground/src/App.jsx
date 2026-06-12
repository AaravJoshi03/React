import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

// function Navbar(){
//   return <h1>This is my Navbar</h1>
// }

function Hero() {
  return <h1>This is my Hero</h1>;
}

function Footer() {
  return <h1>This is my Footer</h1>;
}

function App() {
  return <>   
  <Navbar/>
  <Footer/>
  <Hero/>
  
  </>

}

export default App
