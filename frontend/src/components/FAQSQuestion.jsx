import React, { useState, useEffect } from 'react';
import FAQArrowBeforeClick from "../assets/FAQArrowBeforeClick.svg";
import "../componentsStyling/FAQSQuestion.css";

const FAQSQuestion = ({ question, answer, openFaq, setOpenFaq, number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const onClickHandler = () => {
    setOpenFaq((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false; // Set all FAQs to false
        return acc;
      }, {});

      return {
        ...newState,
        [number]: !prev[number], // Toggle the clicked FAQ
      };
    });
  };

  // Handle the visibility with a smooth fade-in/out transition
  useEffect(() => {
    if (openFaq[number]) {
      setIsVisible(true); // Make visible for fade-in
      setIsFading(true); // Start fade-in animation
    } else {
      setIsFading(false); // Start fade-out animation
      // Delay hiding to allow fade-out animation to complete
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [openFaq, number]);

  return (
    <div className='FAQOuter' style={{ overflow: 'hidden' }}>
      <div className='FAQQuestionAndIcon' onClick={onClickHandler}>
        <p className='QuestionInFAQ'>{question}</p>
        <img
          src={FAQArrowBeforeClick}
          alt=""
          className='FAQArrowBeforeClick'
          style={{
            transform: openFaq[number] ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      <div
        className='FAQAnswer'
        style={{
          opacity: isFading ? 1 : 0,
          maxHeight: isVisible ? '1000px' : '0',
          padding: isVisible ? '24px 16px' : '0 16px',
          overflow: 'hidden',
          transition: 'opacity 0.3s ease, max-height 0.3s ease, padding 0.3s ease',
        }}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQSQuestion;
