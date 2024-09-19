import CircularProgressBar from "./CircularProgressBar"
import React, { useState, useEffect } from 'react';

const OuterCircularProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev < 85 ? prev + 1 : 85)); // Stop at 85%
      }, 100);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="OuterCircularProgressBar">
        <CircularProgressBar size={200} strokeWidth={25} progress={progress} />
      </div>
    );
}

export default OuterCircularProgressBar
