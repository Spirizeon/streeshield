import React from 'react'
import HowItWorks from '../sections/HowItWorks'
import HeroSection from '../sections/HeroSection'
import IndianStats from '../sections/IndianStats'
import RealStoriesAndImpact from '../sections/RealStoriesAndImpact'
import FAQSection from '../sections/FAQSection'
import "../pagesStyling/Home.css";
import halfshield from "../assets/halfshield.svg"

const Home = () => {
  return (
    <div className='HomeOuter'>
      <img src={halfshield} alt="" className='HalfShieldLeft'/>
      <img src={halfshield} alt="" className='HalfShieldRight'/>
      
      <div className='SectionOuterForBorder'>
        <HeroSection />
        <div className='BorderBottomForSection'></div>
      </div>
      <div className='SectionOuterForBorder'>
        <IndianStats />
        <div className='BorderBottomForSection'></div>
      </div>
      <div className='SectionOuterForBorder'>
        <HowItWorks />
        <div className='BorderBottomForSection'></div>
      </div>
      <div className='SectionOuterForBorder'>
        <RealStoriesAndImpact />
        <div className='BorderBottomForSection'></div>
      </div>
      <div className='SectionOuterForBorder'>
      <FAQSection />
      <div className='BorderBottomForSection'></div>
      </div>
    </div>
  )
}

export default Home
