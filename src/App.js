import "./App.css";
import React from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome, I'm Maura Sweeney</h1>
      </header>
      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
