import React from 'react'
import HeroPageButtonTop from "../assets/HeroPageButtonTop.svg";
import CheckYourMediaButton from '../components/CheckYourMediaButton';
import GirlImageOneHeroPage from "../assets/GirlImageOneHeroPage.webp";
import GirlImageTwoHeroPage from "../assets/GirlImageTwoHeroPage.webp";
import "../sectionsStyling/HeroSection.css";

const HeroSection = () => {
  return (
    <div className='HeroSection'>
      <div className='HeroTextAndCheckMediaButton'>
        <div className='ButtonTitleGroupAndSubtitle'>
            <div className='HeroPageButtonTopAndTitle'>
                <div className='HeroPageButtonTop'>
                  <p className='HeroPageButtonTopText'>True Identity Check</p>
                    <img src={HeroPageButtonTop} alt="" />
                </div>
                <h1 className='StreeAndShieldText'><span className='StreeText'>स्त्री</span> <span className='ShieldText'>Shield</span></h1>
            </div>
            <p className='HeroSectionSubText'>Protecting Women's Identities in the Digital World.</p>
        </div>
        <CheckYourMediaButton/>
      </div>
      {/* <div className='HeroPageGirlImages'>
        <img src={GirlImageOneHeroPage} alt="" />
        <img src={GirlImageTwoHeroPage} alt="" />
      </div> */}
    </div>
  )
}

export default HeroSection
