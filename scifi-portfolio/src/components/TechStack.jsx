import React, { useState } from "react";
import "./styles/techstack.css";

export default function Techstack() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const techstack = [
    {
      name: "Frontend ",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Vue",
        "Next.js",
        "Nuxt",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "Supabase",
      ],
    },
    {
      name: "Learning",
      tags: ["Java SE 11", "C #", "Spring Boot"],
    },
  ];

  const activeTab = techstack[activeTabIndex];

  return (
    <div>
      <div className="techstack-card">
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
          <h4 className="techstack-title">{activeTab.name}</h4>
          <ul className="techstack-list">
            {activeTab.tags.map((tag, idx) => (
              <li key={idx} className="techstack-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
