import "./App.css";
import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: "welcome", title: "Welcome" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const windowMiddle = windowHeight / 2;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const firstSection = document.getElementById(sections[0].id);
      const firstSectionTop =
        firstSection.getBoundingClientRect().top + window.scrollY;

      // Calculate progress relative to first section
      const adjustedScrollTop = Math.max(0, scrollTop - firstSectionTop);
      const adjustedDocumentHeight = documentHeight - firstSectionTop;
      const overallProgress =
        (adjustedScrollTop / adjustedDocumentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, overallProgress)));

      // Find active section based on window middle
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          if (Math.abs(sectionMiddle - windowMiddle) < windowHeight * 0.25) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const windowHeight = window.innerHeight;
      const middle =
        absoluteElementTop - windowHeight / 2 + elementRect.height / 2;

      window.scrollTo({
        top: middle,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll(".slide-in");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div>
      <main>
        <div className="progress-container">
          <div
            className="progress-line"
            style={{
              "--progress-height": `${progress}%`,
            }}
          ></div>
          <div className="section-markers">
            {sections.map((section, index) => {
              const sectionProgress = (index / (sections.length - 1)) * 100;
              const isActive = sectionProgress <= progress;
              const isCurrent = section.id === activeSection;

              return (
                <div
                  key={section.id}
                  className={`section-marker ${isActive ? "active" : ""} ${
                    isCurrent ? "current" : ""
                  }`}
                  style={{
                    top: `${sectionProgress}%`,
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="section-title">{section.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div id="welcome" className="welcome-section">
          <h1>
            Welcome, I'm{" "}
            <span className="name">
              <span>M</span>
              <span>a</span>
              <span>u</span>
              <span>r</span>
              <span>a</span>
              <span>&nbsp;</span>
              <span>S</span>
              <span>w</span>
              <span>e</span>
              <span>e</span>
              <span>n</span>
              <span>e</span>
              <span>y</span>
            </span>
          </h1>
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
