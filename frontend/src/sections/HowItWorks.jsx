import React from 'react';
import SectionHeader from '../components/SectionHeader';
import HowItWorksThreeCards from '../components/HowItWorksThreeCards';
import "../sectionsStyling/HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className='HowItWorks'>
      <div>
        <SectionHeader title="How it Works?" subtitle="Our system uses smart technology to spot the fakes!"/>
      </div>
      <HowItWorksThreeCards/>
    </div>
  )
}

export default HowItWorks
