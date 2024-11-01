import React, { useState, useEffect } from "react";

const chars = "~!@#$%^&*()[]{}|<>?";

const TextEncrypted = ({ text = "Shield", interval = 150, pauseDuration = 1000 }) => {
  const [outputText, setOutputText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let timer;
    let resetTimer;

    const startAnimation = () => {
      setIsAnimating(true);
      timer = setInterval(() => {
        setOutputText((prev) => {
          const nextText = text.slice(0, prev.length + 1);

          // When reaching full text, stop interval, pause, and reset
          if (nextText === text) {
            clearInterval(timer); // Stop the animation interval
            resetTimer = setTimeout(() => {
              setOutputText(""); // Clear text to restart animation
              setIsAnimating(false); // Set to false to trigger restart
            }, pauseDuration); // 1-second pause before reset
            return nextText;
          }

          return nextText;
        });
      }, interval);
    };

    // Start the animation if isAnimating is true
    if (isAnimating) {
      startAnimation();
    } else {
      // Restart the animation after pause
      setIsAnimating(true);
    }

    // Cleanup intervals and timeout
    return () => {
      clearInterval(timer);
      clearTimeout(resetTimer);
    };
  }, [isAnimating, text, interval, pauseDuration]);

  // Generate random characters for the remainder
  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  return (
    <span>
      {outputText}
      {remainder}
    </span>
  );
};

export default TextEncrypted;
