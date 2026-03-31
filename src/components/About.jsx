import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <div className="about-box">
      <div className="info-wrapper">
        <h3>About me</h3>
        <p>
          Welcome to my portfolio! I'm a 25 year old developer based in
          Stockholm, Sweden. <br />
          I've been coding for about 2 years now, and I'm still learning new
          things every day. <br /> <br />I hope you enjoy my portfolio, and if
          you have any questions, please don't hesitate to contact me.
        </p>

        <p>I have many interests besides coding, here are a few.</p>
        <ul>
          <li>Cooking</li>
          <li>Gaming</li>
          <li>Warhammer 40K</li>
          <li>Juggling</li>
          <li>Petting cats</li>
        </ul>

        <div className="media-links">
          <a href="https://www.linkedin.com/in/gabrielkassarp/">LinkedIn</a>
          <a href="https://github.com/gaka00">GitHub</a>
        </div>
      </div>
    </div>
  );
}
