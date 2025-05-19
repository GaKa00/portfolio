import React from "react";
import "./styles/about.css"

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
          The neophyte shows promise and fast learning in the many languages of
          the Cult Mechanicus. Neophyte Gabriel has presented satisfactory
          social skills and communication with peers.
        </p>
        <p>
          Neophyte Gabriel has shown a strong interest in the following areas:
        </p>
        <ul>
          <li>Video Games</li>
          <li>Warhammer 40K</li>
          <li>History</li>
          <li>Cooking</li>
          <li>Juggling</li>
        </ul>

        </div>
      </div>
  );
}
