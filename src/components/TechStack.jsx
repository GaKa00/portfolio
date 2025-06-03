import React, { useState } from "react";
import "./styles/techstack.css";

export default function Techstack() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const techstack = [
    {
      name: "Frontend ",
      tags: [
        "HTML5",
        "PHP",
        "Wordpress",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Vue",
        "Next.js",
        "Nuxt",
        "Tailwind",
      ],
    },
    {
      name: "Backend",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Firebase",
        "Supabase",
      ],
    },
    {
      name: "Learning",
      tags: ["Java SE 11",  "Spring Boot", "Kotlin"],
    },
  ];

  const activeTab = techstack[activeTabIndex];

  return (
      <div className="techstack-card">
        <p className="techstack-text"> 
          Here is my ever growing techstack! <br/> <br/>
          I code primarily in React/Vue, but I also know a few other languages and frameworks.
          There may not be a project here that uses all of these, but I have acquired a solid level of experience with all of these langauges and tools.
          </p>
        <div className="techstack-tabs">
          {techstack.map((tab, index) => (
            <div
              key={index}
              className={`techstack-tab ${
                index === activeTabIndex ? "active" : ""
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="techstack-content">
          <ul className="techstack-list">
            {activeTab.tags.map((tag, idx) => (
              <li key={idx} className="techstack-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
