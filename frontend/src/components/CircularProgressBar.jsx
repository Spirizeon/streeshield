import React from 'react';

const CircularProgressBar = ({ size, strokeWidth, progress }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

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

  // Determine the text based on the progress percentage
  const displayText = progress > 49 ? 'MORPHED' : 'UNMORPHED';

  return (
    <svg width={size} height={size} className="circular-progress">
      {/* Define gradients inside <defs> */}
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

      {/* Background circle */}
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={transform}
      />
      
      {/* Progress circle with gradient stroke */}
      <circle
        stroke={`url(#${gradientId})`}  // Use the dynamic gradient here
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={transform}
        style={{ transition: 'stroke-dashoffset 0.35s' }}  // Keep smooth progress
      />
      
      {/* Percentage text in the center */}
      <text
        x="50%"
        y="50%"
        dy="-0.3em" // Adjust vertical position
        textAnchor="middle"
        fontSize="28"
        fill="#fff"  // Text color
      >
        {progress}%
      </text>
      {/* Additional text below the percentage */}
      <text
        x="50%"
        y="50%"
        dy="1.2em" // Position below the percentage
        textAnchor="middle"
        fontSize="20"
        fill="#868686"
        fontWeight="500"  // Text color
      >
        {displayText}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
