import React from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Herosection";

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to the Hero Section!</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
