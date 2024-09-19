import { useState, useEffect } from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar';

const SemiCirlceProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 50); // Adjust this interval for faster or slower animation
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        <div>
          <SemiCircleProgress
            percentage={progress}
            size={{
              width: 320,
              height: 320,
            }}
            strokeWidth={6}
            strokeColor="#683FEA"
          />
        </div>
      </>
    );
}

export default SemiCirlceProgressBar
