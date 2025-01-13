import React from "react";
import meInLisbon from "../../Assets/Images/meInLisbon.jpeg";

const About = () => {
  const aboutMe = [
    {
      icon: "🛩️",
      title: "TRAVEL",
      description:
        "I've always enjoyed exploring new places, fueling my curiosity and experiencing to different cultures, inspiring creativity and adaptability in my work and personal growth.",
    },
    {
      icon: "🌍",
      title: "DIVERSE PERSPECTIVES",
      description:
        "Engaging with people from different backgrounds and cultures enriches my understanding of global challenges and enhances my problem-solving by encouraging innovative approaches.",
    },
    {
      icon: "🥾",
      title: "HIKING",
      description:
        "Hiking helps me recharge, develop resilience, and stay focused. I love the challenges in overcoming obstacles while appreciating the journey and the views along the way.",
    },
    {
      icon: "💻",
      title: "UI/UX DESIGN",
      description:
        "I use creativity with technical skills to design intuitive and visually engaging user interfaces, creating meaningful digital experiences for diverse audiences.",
    },
  ];
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="slide-in">
          <h2 className="about-header">About Me</h2>
          <div className="about-content">
            <div className="about-intro">
              <img src={meInLisbon} alt="Me in Lison" className="about-image" />
              <div className="about-text">
                <p>
                  I am a junior at Gonzaga University graduating May 2026. I've
                  had the incredible opportunity to study Computer Science,
                  Applied Mathematics, and Entrepreneurial Leadership focusing
                  on Software Development, Data Analytics, and Adaptive
                  Leadership.
                </p>
                <p>
                  I'm always looking for opportunities to gain new skills and
                  put what I've learned into practice, so I am currently seeking
                  internships to apply my skills in real world scenarios.
                </p>
              </div>
            </div>
          </div>

          <div className="about-skills slide-in">
            <h3 className="about-header">What I Do</h3>
            <div className="about-grid">
              {aboutMe.map((about, index) => (
                <div key={index} className="about-card">
                  <div className="card-icon">{about.icon}</div>
                  <h3 className="card-title">{about.title}</h3>
                  <p className="card-description">{about.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
