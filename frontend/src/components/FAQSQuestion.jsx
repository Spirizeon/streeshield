import React from 'react'
import FAQArrowBeforeClick from "../assets/FAQArrowBeforeClick.svg";
import "../componentsStyling/FAQSQuestion.css";

const FAQSQuestion = ({question}) => {
  return (
    <div className='FAQSOuter'>
      <p className='QuestionInFAQ'>{question}</p>
      <img src={FAQArrowBeforeClick} alt="" className='FAQArrowBeforeClick'/>
    </div>
  )
}

export default FAQSQuestion
