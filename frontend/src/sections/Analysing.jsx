import { useState, useEffect } from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar';

import SpotlightCard from '../components/SpotlightCard';
import DisabledSheild from "../assets/DisabledSheild.svg";
import ActiveSheild from "../assets/ActiveSheild.svg";
import AnalysingButton from '../components/AnalysingButton';
import "../sectionsStyling/Analysing.css";
import BackHomeButton from "../components/BackHomeButton";

import { NavLink } from 'react-router-dom';
const Analysing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50); // Adjust this interval for faster or slower animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='AnalysingSectionOuter'>
      <div className='BackHomeButtonINAnalyse'>
      <BackHomeButton/>
      </div>
      <div className='AnalysingSection'>
        <h2 className='AnalysingSectionHeader'>ANALYSING</h2>
        <div className='AnalysingSectionSpotlightOuterBox'>
          <div className='border-gradient-color'></div>
          <p className='CardNumber'>2</p>
          <SpotlightCard className="custom-spotlight-card AnalysingSectionSpotlight" spotlightColor="rgba(0, 229, 255, 0)">
            <div className='ProgressBarHeader'>Extracting</div>
            <div className='ProgressBarAndButton'>
              <div className='ProgressBarFooter'>
                <div className='SemiCirlceProgressBar'>
                  <SemiCircleProgress
                    percentage={progress}
                    size={{
                      width: 320,
                      height: 320,
                    }}
                    strokeWidth={6}
                    strokeColor="#683FEA"
                    fontStyle={{fill:'#fff'}}
                  />
                </div>
              </div>
              {progress === 100 ? (
                <NavLink to="/result">
                  <AnalysingButton textColor="#FFF" backgroundColor="#00D17A" Icon={ActiveSheild} />
                </NavLink>
              ) : (
                <AnalysingButton textColor="#979797" backgroundColor="#6F6F6F" Icon={DisabledSheild} />
              )}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Analysing;
