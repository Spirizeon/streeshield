import CircularProgressBar from "./CircularProgressBar";
import React, { useState, useEffect } from 'react';

const OuterCircularProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);
    const duration = 1000; // 1 second
    const incrementTime = 10; // Update every 10 ms
    const totalIncrements = duration / incrementTime; // Total number of increments
    const incrementValue = percentage / totalIncrements; // Value to increment each step
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + incrementValue;
                // Stop at the given percentage
                return newProgress < percentage ? newProgress : percentage;
            });
        }, incrementTime);
        
        return () => clearInterval(timer);
    }, [percentage]);

    return (
        <div className="OuterCircularProgressBar">
            <CircularProgressBar size={240} strokeWidth={20} progress={Math.round(progress)} />
        </div>
    );
};

export default OuterCircularProgressBar;
