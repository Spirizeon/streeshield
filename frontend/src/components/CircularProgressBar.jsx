import React, { useState, useEffect } from 'react';

const CircularProgressBar = ({ size, strokeWidth, progress }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  // Define responsive font sizes
  const [fontSizeMain, setFontSizeMain] = useState(28);
  const [fontSizeSub, setFontSizeSub] = useState(20);

  // Adjust font sizes based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1080) {
        setFontSizeMain(22.4);
        setFontSizeSub(16);
      } else {
        setFontSizeMain(28);
        setFontSizeSub(20);
      }
    };

    // Initial check and event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define the gradient ID based on the progress range
  let gradientId;
  if (progress <= 20) {
    gradientId = 'gradient1';
  } else if (progress <= 50) {
    gradientId = 'gradient2';
  } else {
    gradientId = 'gradient3';
  }

  const transform = `rotate(-90 ${size / 2} ${size / 2})`;

  return (
    <svg width={size} height={size} className="circular-progress">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="-30.18%" stopColor="#50FE00" />
          <stop offset="30.06%" stopColor="#2A8600" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="-30.18%" stopColor="#E4F408" />
          <stop offset="30.06%" stopColor="#737C00" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="-30.18%" stopColor="#FE0004" />
          <stop offset="95.31%" stopColor="#730002" />
        </linearGradient>
      </defs>

      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={transform}
      />

      <circle
        stroke={`url(#${gradientId})`}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={transform}
        style={{ transition: 'stroke-dashoffset 0.35s' }}
      />

      <text
        x="50%"
        y="50%"
        dy="-0.3em"
        textAnchor="middle"
        fontSize={fontSizeMain}
        fill="#fff"
      >
        {progress}%
      </text>

      <text
        x="50%"
        y="50%"
        dy="1.2em"
        textAnchor="middle"
        fontSize={fontSizeSub}
        fill="#868686"
        fontWeight="500"
      >
        MORPHED
      </text>
    </svg>
  );
};

export default CircularProgressBar;
