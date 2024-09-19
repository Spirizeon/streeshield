
import React from 'react';

const CircularProgressBar = ({ size, strokeWidth, progress }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Fixed: added quotes around the transform value
  const transform = `rotate(-90 ${size / 2} ${size / 2})`;

  // Choose stroke color based on progress
  const strokeColor = progress > 50 ? '#FF0000' : '#FFA500'; 

  return (
    <svg width={size} height={size} className="circular-progress">
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
        stroke={strokeColor}
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
        dy=".3em"
        textAnchor="middle"
        fontSize="20"
        fill={strokeColor}
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
