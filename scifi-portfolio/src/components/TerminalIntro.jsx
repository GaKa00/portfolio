// src/components/TerminalIntro.jsx
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const TerminalIntro = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start text-terminal bg-black font-mono text-lg p-4 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(rgba(0,255,0,0.08)_1px,transparent_1px)] [background-size:3px_3px] mix-blend-screen animate-flicker"></div>

 
      <div className="absolute inset-0 pointer-events-none z-10 bg-black/10 animate-terminal-flicker"></div>

      <p className="mb-2 text-terminal">
        <span className="text-terminal">&gt; </span>
        <Typewriter
          words={['INITIATE EMPLOYER.DISTRESS.PING...']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-4 space-y-2"
      >
        <p>{'>'} SIGNAL ACQUIRED...</p>
        <p>{'>'}SUBJECT: Fullstack Developer [Gabriel Kassarp]</p>
        <p>{'>'} RANK: TECH-PRIEST</p>
        <p>{'>'} COMMENCING DATA BURST...</p>
      </motion.div>
    </div>
  );
};

export default TerminalIntro;
