 export const NeonGear = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="gear"
  >
    <g filter="url(#glow)">
      <path
        d="M50 30 L55 30 L57 25 L65 30 L68 27 L75 35 L72 38 L78 45 L75 48 L78 55 L72 62 L75 65 L68 73 L65 70 L57 75 L55 70 L50 70 L45 70 L43 75 L35 70 L32 73 L25 65 L28 62 L22 55 L25 52 L22 45 L28 38 L25 35 L32 27 L35 30 L43 25 L45 30 Z"
        stroke="#00ff00"
        strokeWidth="2"
        fill="none"
      />
    </g>
    <defs>
      <filter id="glow" x="0" y="0" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00ff00" />
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00ff00" />
      </filter>
    </defs>
  </svg>
);
