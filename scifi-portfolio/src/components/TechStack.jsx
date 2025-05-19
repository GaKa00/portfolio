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
      <div className="techstack-card">
        <p className="techstack-text"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet laboriosam suscipit adipisci alias perspiciatis quis ad animi sed illo odio officia eligendi, voluptate sequi in voluptas ea aspernatur iste aliquid odit ex, provident quaerat. Tempora doloribus dolore dolor eligendi nisi nam, iste nihil molestias tempore distinctio odio earum maiores!
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
