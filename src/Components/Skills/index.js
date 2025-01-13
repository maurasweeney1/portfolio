import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="slide-in">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-top-row">
          <div className="skills-section">
            <h3>TOOLS</h3>
            <ul className="tools-list">
              <li>Command Line</li>
              <li>Git/Github</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>R Studio</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Jupyter Notebook</li>
              <li>Google Colab</li>
              <li>Tableau</li>
            </ul>
          </div>
          <div className="skills-section">
            <h3>COURSES</h3>
            <ul className="courses-list">
              <li>Algorithms and Abstract Data Structures</li>
              <li>Operating Systems</li>
              <li>Database Systems</li>
              <li>Experimental Statistics</li>
              <li>Data Science</li>
              <li>Linear Algebra</li>
              <li>Computer Security</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slide-in languages-skills-section">
        <h3>LANGUAGES</h3>
        <div className="languages">
          <img src="java.png" alt="Java" className="java icon" />
          <img src="c++.png" alt="C++" className="c++ icon" />
          <img src="c.png" alt="C" className="c icon" />
          <img src="c-sharp.png" alt="C#" className="csharp icon" />
          <img src="python.svg" alt="Python" className="python icon" />
          <img src="r.png" alt="R" className="r icon" />
          <img src="sql.png" alt="SQL" className="sql icon" />
          <img src="javascript.png" alt="Javascript" className="js icon" />
          <img src="html.png" alt="HTML" className="html icon" />
          <img src="css.png" alt="CSS" className="css icon" />
          <img src="react.png" alt="React" className="react icon" />
          <img src="node-js.png" alt="Node.js" className="nodejs icon" />
        </div>
      </div>
    </section>
  );
};
export default Skills;
