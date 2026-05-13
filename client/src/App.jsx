import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {

  return (

    <div className="app">

      {/* GLOBAL ANIMATED BACKGROUND */}

      <div className="global-bg">

        <div className="bg-ball ball1"></div>
        <div className="bg-ball ball2"></div>
        <div className="bg-ball ball3"></div>

        <div className="bg-grid"></div>

        <div className="particles">

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

      {/* WEBSITE */}

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />

      <Footer />

    </div>

  );
}

export default App;