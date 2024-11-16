import CircularProgressBar from "./CircularProgressBar";
import React, { useState, useEffect } from 'react';

const OuterCircularProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);
    const [size, setSize] = useState(240);
    const [strokeWidth, setStrokeWidth] = useState(20);
    
    const duration = 1000; // 1 second
    const incrementTime = 10; // Update every 10 ms
    const totalIncrements = duration / incrementTime;
    const incrementValue = percentage / totalIncrements;

    useEffect(() => {
        // Adjust size and strokeWidth based on screen width
        const handleResize = () => {
            if (window.innerWidth < 1080) {
                setSize(192);
                setStrokeWidth(16);
            } else {
                setSize(240);
                setStrokeWidth(20);
            }
        };

        // Set initial values and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + incrementValue;
                return newProgress < percentage ? newProgress : percentage;
            });
        }, incrementTime);
        return () => clearInterval(timer);
    }, [percentage, incrementValue]);
    
    return (
        <div className="OuterCircularProgressBar">
            <CircularProgressBar size={size} strokeWidth={strokeWidth} progress={Math.round(progress)} />
        </div>
    );
};

export default OuterCircularProgressBar;
