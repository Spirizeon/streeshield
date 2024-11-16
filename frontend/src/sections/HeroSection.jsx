import React from 'react'
import HeroPageButtonTop from "../assets/HeroPageButtonTop.svg";
import CheckYourMediaButton from '../components/CheckYourMediaButton';
import GirlImageOneHeroPage from "../assets/GirlImageOneHeroPage.webp";
import GirlImageTwoHeroPage from "../assets/GirlImageTwoHeroPage.webp";
import "../sectionsStyling/HeroSection.css";
import LinesHeroSection from "../assets/LinesHeroSection.svg"
import TextEncrypted from '../components/TextEncrypted';
const HeroSection = () => {
  return (
    <div className='HeroSection'>
      <div className='HeroTextAndCheckMediaButton'>
        
        <div className='ButtonTitleGroupAndSubtitle'>
          <div className='HeroPageButtonTopAndTitle'>
            <div className='HeroPageButtonTop'>
              <img src={HeroPageButtonTop} alt="" />
            </div>
            <h1 className='StreeAndShieldText'><span className='StreeText'>स्त्री</span> <span className='ShieldText'><TextEncrypted/></span></h1>
          </div>
          <p className='HeroSectionSubText'>Protecting Women's Identities in the Digital World.</p>
        </div>
        <CheckYourMediaButton />
      </div>
      <div className='HeroPageGirlImages'>
        <img src={GirlImageOneHeroPage} alt="" className='FirstImageInHeroSection'/>
        <img src={GirlImageTwoHeroPage} alt="" className='SecondImageInHeroSection'/>
      </div>
    </div>
  )
}

export default HeroSection
