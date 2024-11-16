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
      
      <div className='SectionOuterForBorder' id='hero-section'>
        <HeroSection />
        <div className='BorderBottomForSection' id='indian-stats'></div>
        <div className='BackgroundBlurViolet'></div>
        <div className='BackgroundBlurYellow'></div>
      </div>
      <div className='SectionOuterForBorder' >
        <IndianStats />
        <div className='BorderBottomForSection'></div>
        <div className='BackgroundBlurViolet'></div>
        <div className='BackgroundBlurYellow'></div>
      </div>
      <div className='SectionOuterForBorder'>
        <HowItWorks />
        <div className='BorderBottomForSection' id='real-stories'></div>
      </div>
      <div className='SectionOuterForBorder' >
        <RealStoriesAndImpact />
        <div className='BorderBottomForSection' id='faq-section'></div>
        <div className='BackgroundBlurViolet'></div>
        <div className='BackgroundBlurYellow'></div>
      </div>
      <div className='SectionOuterForBorder' >
      <FAQSection />
      <div className='BorderBottomForSection'></div>
      <div className='BackgroundBlurViolet'></div>
      <div className='BackgroundBlurYellow'></div>
      </div>
      
    </div>
  )
}

export default Home
