import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import "../sectionsStyling/FAQSection.css";
import FAQSQuestion from '../components/FAQSQuestion';
const FAQSection = () => {
  const [openFaq,setOpenFaq]=useState({
    one:false,
    two:false,
    three:false,
    four:false,
    five:false
  });

  return (
    <div className='FAQSection'>
      <SectionHeader title="FAQ" subtitle="Got Questions? We've Got Answers."/>
      <div className='FAQSAllQuestions'>
        <FAQSQuestion question="What Algorithms you used for this?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, minus, accusantium tempora suscipit animi dolores cumque amet commodi est sint." openFaq={openFaq} setOpenFaq={setOpenFaq} number="one"/>
        <FAQSQuestion question="What Algorithms you used for this?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, minus, accusantium tempora suscipit animi dolores cumque amet commodi est sint." openFaq={openFaq} setOpenFaq={setOpenFaq} number="two"/>
        <FAQSQuestion question="What Algorithms you used for this?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, minus, accusantium tempora suscipit animi dolores cumque amet commodi est sint." openFaq={openFaq} setOpenFaq={setOpenFaq} number="three"/>
        <FAQSQuestion question="What Algorithms you used for this?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, minus, accusantium tempora suscipit animi dolores cumque amet commodi est sint." openFaq={openFaq} setOpenFaq={setOpenFaq} number="four"/>
        <FAQSQuestion question="What Algorithms you used for this?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, minus, accusantium tempora suscipit animi dolores cumque amet commodi est sint." openFaq={openFaq} setOpenFaq={setOpenFaq} number="five"/>
      </div>
    </div>
  )
}

export default FAQSection
