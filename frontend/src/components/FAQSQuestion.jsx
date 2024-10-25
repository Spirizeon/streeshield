import React from 'react';
import FAQArrowBeforeClick from "../assets/FAQArrowBeforeClick.svg";
import "../componentsStyling/FAQSQuestion.css";

const FAQSQuestion = ({ question, answer, openFaq, setOpenFaq, number }) => {
  const onClickHandler = () => {
    setOpenFaq((prev) => {
      // Create a new object with all keys set to false
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false; // Set all FAQs to false
        return acc;
      }, {});

      // Set the clicked FAQ to the opposite of its previous value
      return {
        ...newState,
        [number]: !prev[number], // Toggle the clicked FAQ
      };
    });

    console.log(openFaq);
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
            transition: 'transform 0.3s ease'
          }}
        />

      </div>
      {openFaq[number] && <p className='FAQAnswer'>{answer}</p>}
    </div>
  );
};

export default FAQSQuestion;
