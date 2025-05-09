
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import "./styles/terminal.css";

const lines = [
  "> INITIATE EMPLOYER.DISTRESS.PING...",
  "  Signal acquired.",
  "  Loading reciever data...",
  "  Ranking: Tech Priest Neophyte",
  "  Subject: Gabriel Kassarp",
  "  Classification: Fullstack Developer",
  "  Data burst recieved, uploading profile...",
  "",
];

export default function TerminalIntro({ onFinish }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [showGrain, setShowGrain] = useState(false);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setLineIndex((i) => i + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowGrain(true);
      setTimeout(() => {
        setShowGrain(false);
        onFinish?.();
      }, 500);
    }
  }, [lineIndex]);

  return (
    <div className="terminal-screen">
      {lineIndex === 0 && (
        <div className="incoming-banner flicker">
          ⬤ INCOMING TRANSMISSION...
        </div>
      )}

      {displayedLines.map((line, i) => (
        <div key={i} className="typed-line">
          <Typewriter
            words={[line]}
            loop={1}
            cursor={false}
            typeSpeed={10}
            deleteSpeed={0}
            delaySpeed={2}
          />
        </div>
      ))}
      {lineIndex > 0 && lineIndex < lines.length && (
        <div className="typed-line cursor">█</div>
      )}

      {showGrain && <div className="grain-transition"></div>}
    </div>
  );
}
