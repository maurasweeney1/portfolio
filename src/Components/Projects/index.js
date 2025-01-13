import React from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const indivProjects = [
    {
      title: "My Best Self",
      description:
        "A simple web site designed based on the University of Michigan's Ross School of Business's self-evaluation tool to showcase what my close family and friends would describe as my 'best self",
      image: "best-self-preview.png",
      link: "https://maurasweeney1.github.io/best-self/",
      github: "https://github.com/maurasweeney1/best-self",
      tools: ["HTML", "CSS"],
    },
    {
      title: "Something Good Everyday",
      description:
        "Users are able to create an account and sign in to view this web site meant to be a source of positivity and inspiration. Users can post an anonymous thought, quote or image to this social media website. ",
      image: "SGE-preview.png",
      link: "https://somethinggoodeveryday.onrender.com/",
      github: "https://github.com/maurasweeney1/somethingGoodEveryday",
      tools: ["HTML", "CSS", "Javascript", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Connect Four",
      description:
        "A two-player strategy game where the objective is to be the first player to connect four of their token in a row, either horizontally, vertically, or diagonally, on the game grid. The grid usually consists of six rows and seven columns. Each player gets their own color token and they take turns selecting a column to drop their token. The token is then placed at the lowest available position in that column. The first player to connect four discs in a row in any direction wins the game. If the grid fills up without a winner, the game is considered a draw.",
      image: "connect4-preview.png",
      link: "https://github.com/maurasweeney1/four-in-a-row#setup",
      github: "https://github.com/maurasweeney1/four-in-a-row",
      tools: ["Java", "Maven", "JUnit", "Swing", "Spotless"],
    },
    {
      title: "Rent Splitter",
      description:
        "A new website **currently in progress** that aims to make split payments seamless, and stress free. The project allows you to put in designated payment amounts, set reminders, and add roommate groups.",
      image: /*"rent-splitter-preview.png"*/ "",
      link: "https://github.com/maurasweeney1/RentSplitter#setup",
      github: "https://github.com/maurasweeney1/RentSplitter",
      tools: ["Java", "MySQL", "Maven", "JUnit Jupiter", "Docker"],
    },
  ];
  return (
    <section id="projects">
      <h2>My Projects</h2>
      {indivProjects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="image-container">
            <img
              src={project.image}
              alt={`Preview of ${project.title}`}
              className="project-image"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="open-button"
            >
              <img src="open.png" alt="Open project" className="open-icon" />
            </a>
          </div>
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <Github />
            </a>
          </div>

          <div className="project-content">
            <p className="project-description">{project.description}</p>
          </div>

          <div className="project-footer">
            {project.tools.map((tool, toolIndex) => (
              <span key={toolIndex} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
