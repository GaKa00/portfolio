import "./styles/terminal.css";

export default function TerminalShell({ children }) {
  return (
    <div className="terminal-shell">
      <header className="terminal-header">
        <h1>Gabriel Kassarp</h1>
        <h2>Full Stack Developer</h2>
      </header>

      <div className="terminal-content">{children}</div>
    </div>
  );
}
