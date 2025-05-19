import { useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import TerminalShell from "./components/TerminalShell";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GrainOverlay from "./components/GrainOverlay";



function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [grainActive, setGrainActive] = useState(false);

  const handleFinish = () => {
    setGrainActive(true);
    setTimeout(() => {
      setGrainActive(false);
    }, 500);
    setIntroComplete(true);
  };

  return (
    <>
      {grainActive ? (
        <GrainOverlay />
      ) : !introComplete ? (
        <TerminalIntro onFinish={handleFinish} />
      ) : (
        <TerminalShell>
          <div className="layout-container">
            <div className="column">
              <div className="row">
                <About />
                <Techstack />
              </div>
              <div className="row">
                <Projects />
                <Contact />
              </div>
            </div>
          </div>
        </TerminalShell>
      )}
    </>
  );
}

export default App;
