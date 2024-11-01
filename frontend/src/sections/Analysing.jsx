import { useState, useEffect } from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import SpotlightCard from '../components/SpotlightCard';
import DisabledSheild from "../assets/DisabledSheild.svg";
import ActiveSheild from "../assets/ActiveSheild.svg";
import AnalysingButton from '../components/AnalysingButton';
import "../sectionsStyling/Analysing.css";
import BackHomeButton from "../components/BackHomeButton";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Analysing = () => {
  const [progress, setProgress] = useState(0);
  const [progressSize, setProgressSize] = useState({ width: 320, height: 320 });
  const [fontSize, setFontSize] = useState(20); // Default font size
  const location = useLocation();
  const { percentageMorphed, searchResult } = location.state || {};

  useEffect(() => {
    const updateProgressSizeAndFont = () => {
      if (window.innerWidth < 560) {
        setProgressSize({ width: 240, height: 240 });
        setFontSize(14);
      } else if (window.innerWidth < 720) {
        setProgressSize({ width: 280, height: 280 });
        setFontSize(16);
      } else {
        setProgressSize({ width: 320, height: 320 });
        setFontSize(20); // Original font size for larger screens
      }
    };

    updateProgressSizeAndFont();
    window.addEventListener('resize', updateProgressSizeAndFont);

    return () => window.removeEventListener('resize', updateProgressSizeAndFont);
  }, []);

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
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className='AnalysingSectionMainOuter'>
      <div className='AnalysingSectionOuter'>
        <div className='BackHomeButtonINAnalyse'>
          <BackHomeButton />
        </div>
        <div className='AnalysingSection'>
          <h2 className='AnalysingSectionHeader'>ANALYSING</h2>
          <div className='AnalysingSectionSpotlightOuterBox'>
            <div className='border-gradient-color'></div>
            <p className='CardNumber'>2</p>
            <SpotlightCard className="custom-spotlight-card AnalysingSectionSpotlight" spotlightColor="rgba(0, 229, 255, 0)">
              <div className='ProgressBarHeader'>
                {progress === 100 ? 'Result Ready' : 'Extracting'}
              </div>
              <div className='ProgressBarAndButton'>
                <div className='ProgressBarFooter'>
                  <div className='SemiCirlceProgressBar'>
                    <SemiCircleProgress
                      percentage={progress}
                      size={progressSize}
                      strokeWidth={6}
                      strokeColor="#683FEA"
                      fontStyle={{ fill: '#fff', fontSize: `${fontSize}px`, transform: 'translate(-2%,-12%)', textAnchor: 'middle' }}
                    />
                  </div>
                  <p
                    className='TextBelowInSemiCircle'
                    style={{ color: progress === 100 ? '#00D17A' : '#5B5B5B' }}
                  >
                    {progress === 100 ? 'File Analyzed Successfully' : 'Your File is being processed'}
                  </p>
                </div>
                {progress === 100 ? (
                  <NavLink to="/result" state={{ percentageMorphed, searchResult }} className={'ViewResultButton'}>
                    <AnalysingButton textColor="#FFF" backgroundColor="#00D17A" Icon={ActiveSheild} />
                  </NavLink>
                ) : (
                  <div className="DisViewResultButton" >
                    <AnalysingButton textColor="#979797" backgroundColor="#6F6F6F" Icon={DisabledSheild} />
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>
        </div>
        <div className='BorderBottomForSection'></div>
      </div>
    </div>
  );
};

export default Analysing;
