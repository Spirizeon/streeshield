import React from 'react'
import SpotlightCard from './SpotlightCard';
import "../componentsStyling/HowItWorksThreeCards.css";
import analyse from "../assets/analyse.svg";
import result from "../assets/result.svg";
import upload from "../assets/upload.svg";

const HowItWorksThreeCards = () => {
  return (
    <div className='HowItWorksThreeCards'>
        <div className='spotlight-card-outer'>
            <div className='border-gradient-color'></div>
            <p className='CardNumber'>1</p>
            <SpotlightCard className="custom-spotlight-card cards-in-how-it-works" spotlightColor="rgba(238, 180, 6,0.2)">
                <img src={upload} alt="" />
                <div className='HowItWorksCardText'>
                    <h3>UPLOAD</h3>
                    <p>Drag and drop or select a file from your device. Supports various formats.</p>
                </div>
            </SpotlightCard>
        </div>
        <div className='spotlight-card-outer'>
        <div className='border-gradient-color'></div>
            <p className='CardNumber'>2</p>
            <SpotlightCard className="custom-spotlight-card cards-in-how-it-works" spotlightColor="rgba(151, 71, 255,0.2)">
                <img src={analyse} alt="" />
                <div className='HowItWorksCardText'>
                    <h3>ANALYSE</h3>
                    <p>Our AI examines your media for signs of manipulation using advanced detection techniques.</p>
                </div>
            </SpotlightCard>
        </div>
        <div className='spotlight-card-outer'>
        <div className='border-gradient-color'></div>
            <p className='CardNumber'>3</p>
            <SpotlightCard className="custom-spotlight-card cards-in-how-it-works" spotlightColor="rgba(0, 229, 255, 0.2)">
                <img src={result} alt="" />
                <div className='HowItWorksCardText'>
                    <h3>RESULT</h3>
                    <p>Get a concise report on any alterations found in your media.</p>
                </div>
            </SpotlightCard>
        </div>
    </div>
  )
}

export default HowItWorksThreeCards
