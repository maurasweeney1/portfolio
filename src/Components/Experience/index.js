import React from "react";

const TimelineItem = ({ date, title, organization, description, icon }) => (
  <div className="timeline-item slide-in">
    <div className="timeline-icon">{icon}</div>
    <div className="timeline-content">
      <div className="timeline-date">{date}</div>
      <h3 className="timeline-title">{title}</h3>
      <div className="timeline-organization">{organization}</div>
      <ul className="timeline-description">
        {Array.isArray(description) ? (
          description.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{description}</li>
        )}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      date: "AUGUST 2024 - PRESENT",
      title: "SCHOLAR LEAD",
      organization: "Washington State Opportunity Scholarship",
      description: [
        "Providing on-campus and remote peer mentorship to fourteen new Opportunity Scholars",
        "Helping Scholars navigate college and career prep, providing resources, and supporting their academic journeythrough goal setting, prioritization of work, and time management",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      date: "JANUARY 2024 - MAY 2024",
      title: "INSTITUTE FOR AMERICAN UNIVERSITIES",
      organization: "Study Abroad— Madrid, Spain",
      description: [
        "Immersed in Spanish culture, and history while attending courses in computer science, and Spanish culture",
        "Gained cross-cultural communication skills and a global perspective in coursework and daily interactions",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      date: "JANUARY 2023 - PRESENT",
      title: "DEVELOPMENT RESEARCH ASSISTANT",
      organization: "Office of University Advancement Gonzaga University",
      description: [
        "Assisting with data entry projects with a high level of accuracy and attention to detail",
        "Assisting in administrative and clerical work as needed by maintaining spreadsheets, managing and updating donor data, and cleaning and organizing data sets with discretion for the donors' confidential information",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      date: "AUGUST 2022 - PRESENT",
      title: "GONZAGA UNIVERSITY",
      organization:
        "Bachelor of Science in Computer Science, minors in Applied Math and Hogan Entrepreneurial Leadership",
      description: [
        "Expected Graduation: May 2026",
        "3.85 GPA— President's List Fall 2022, Spring 2024",
        "Dean's List Spring and Fall 2023",
        "Member of the Hogan Entrepreneurial Leadership Program, Women in Computing Club, GU Association of Computing Machinery, and Gonzaga Outdoors",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      date: "APRIL 2022 - PRESENT (SEASONALLY)",
      title: "CREW MEMBER",
      organization: "Pochi Bubble Tea Cafe",
      description: [
        "Provided great customer service, took and prepared orders, collected payments, and trained new employees",
        "Collaborated with teammates and management to achieve store-wide goals in a fast-paced environment",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      date: "SEPTEMBER 2019 - JUNE 2022",
      title: "EVERETT COMMUNITY COLLEGE",
      organization: "College in the High School Program",
      description: ["4.0 GPA", "Dean's List Winter 2020 - Spring 2022"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="slide-in" id="experience">
      <h2>My Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
