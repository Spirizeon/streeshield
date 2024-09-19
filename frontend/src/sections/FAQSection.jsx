import React from 'react'
import SectionHeader from '../components/SectionHeader'
import "../sectionsStyling/FAQSection.css";
import FAQSQuestion from '../components/FAQSQuestion';
const FAQSection = () => {
  return (
    <div className='FAQSection'>
      <SectionHeader title="FAQ" subtitle="Got Questions? We've Got Answers."/>
      <div className='FAQSAllQuestions'>
        <FAQSQuestion question="What Algorithms you used for this?"/>
        <FAQSQuestion question="What Algorithms you used for this?"/>
        <FAQSQuestion question="What Algorithms you used for this?"/>
        <FAQSQuestion question="What Algorithms you used for this?"/>
        <FAQSQuestion question="What Algorithms you used for this?"/>
      </div>
    </div>
  )
}

export default FAQSection
