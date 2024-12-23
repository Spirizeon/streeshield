import React from 'react';
import FAQArrowBeforeClick from "../assets/FAQArrowBeforeClick.svg";
import "../componentsStyling/FAQSQuestion.css";

const FAQSQuestion = ({ question, answer, openFaq, setOpenFaq, number }) => {
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

  return (
    <div className='FAQOuter'>
      <div className='FAQQuestionAndIcon' onClick={onClickHandler}>
        <p className='QuestionInFAQ'>{question}</p>
        <img
          src={FAQArrowBeforeClick}
          alt=""
          className='FAQArrowBeforeClick'
          style={{
            transform: openFaq[number] ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        />
      </div>
      {openFaq[number] && (
        <div className='FAQAnswer' style={{ padding: '24px 16px' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQSQuestion;
