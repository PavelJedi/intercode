import React from "react";
import { Header } from "./header/Header";
import { Hero } from "./hero-section/Hero";
import { Benefits } from "./benefits/Benefits";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
    </div>
  );
}

export default App;
