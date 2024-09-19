import React from 'react'
import HowItWorks from '../sections/HowItWorks'
import HeroSection from '../sections/HeroSection'
import IndianStats from '../sections/IndianStats'
import RealStoriesAndImpact from '../sections/RealStoriesAndImpact'
import FAQSection from '../sections/FAQSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <IndianStats/>
      <HowItWorks/>
      <RealStoriesAndImpact/>
      <FAQSection/>
    </div>
  )
}

export default Home
