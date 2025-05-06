import { useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import TerminalShell from "./components/TerminalShell";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete ? (
        <TerminalIntro onFinish={() => setIntroComplete(true)} />
      ) : (
        <TerminalShell>
          <div className="flex flex-wrap">
         <About/>
         <Techstack/>
         <Projects/>
          </div>
         
        </TerminalShell>
      )}
    </>
  );
}

export default App;
