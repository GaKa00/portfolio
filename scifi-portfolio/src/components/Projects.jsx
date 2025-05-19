import React, { useEffect, useState } from "react";
import projectData from "../data/projects.json";
import "./styles/projects.css";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        exitFullscreen();
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  const handleNext = () => {
    triggerGlitch(() => {
      setCurrentIndex((prev) => (prev + 1) % projectData.length);
    });
  };

  const handlePrev = () => {
    triggerGlitch(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? projectData.length - 1 : prev - 1
      );
    });
  };

  const triggerGlitch = (callback) => {
    setGlitch(true);
    setTimeout(() => {
      callback();
      setGlitch(false);
    }, 300);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
  };

  const project = projectData[currentIndex];

  return (
   
      <div
        className={`project-card ${glitch ? "glitch" : ""} ${
          isFullscreen ? "fullscreen" : ""
        }`}
      >
        <div className="video-container cursor-pointer" onClick={toggleFullscreen}>
          <video
            src={project.video}
            controls
            muted
            className="project-video"
            onEnded={exitFullscreen}
            autoPlay={isFullscreen}
            
          />
          {isFullscreen && <div className="static-overlay" />}
        </div>

        {!isFullscreen && (
          <div className="text-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="controls">
              <button onClick={handlePrev}>&lt; Prev</button>
              <button onClick={handleNext}>Next &gt;</button>
            </div>
          </div>
        )}
      </div>
    
  );
}

