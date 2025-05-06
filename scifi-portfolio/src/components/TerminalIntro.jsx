// src/components/TerminalIntro.jsx
import { useEffect, useState } from "react";
import "./styles/terminal.css"

const lines = [
  "> INITIATE EMPLOYER.DISTRESS.PING...",
  "Signal acquired.",
  "Ranking: Tech Priest Neophyte",
  "Subject: Gabriel Kassarp",
  "Classification: Fullstack Developer",
  "Recieving data burst..."
];

export default function TerminalIntro({ onFinish }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[lineIndex]]);
        setLineIndex(i => i + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      onFinish?.();
    }
  }, [lineIndex]);

  return (
    <div className="terminal-screen">
      {displayedLines.map((line, i) => (
        <div key={i} className="typed-line">{line}</div>
      ))}
      {lineIndex < lines.length && <div className="typed-line cursor">█</div>}
    </div>
  );
}
