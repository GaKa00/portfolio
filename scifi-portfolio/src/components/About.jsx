import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <div className="about-box">
      <div className="image-wrapper">
        <img
          src="../src/assets/mechanicus.png"
          alt="Mechanicus Symbol"
          className="about-image"
        />
      </div>
      <div className="info-wrapper">
        <h3>Additional Info</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          repellendus consequuntur neque laboriosam ipsa perferendis corrupti
          quasi amet soluta a, et distinctio? Recusandae nam aut fugit
          aspernatur eos, voluptas animi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, cumque!
        </p>
        <ul>
          <li>--</li>
          <li>--</li>
          <li>--</li>
          <li>--</li>
          <li>--</li>
        </ul>

        <div className="media-links">
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            LinkedIn
          </a>
          <a href="https://www.github.com/your-github-profile">GitHub</a>
        </div>
      </div>
    </div>
  );
}
