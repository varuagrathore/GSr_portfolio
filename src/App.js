import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from './components/Residencies/Residencies';
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      
    </div>
  );
}
