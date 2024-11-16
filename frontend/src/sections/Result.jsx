import React, { useState } from 'react'; // Import useState for state management
import SpotlightCard from '../components/SpotlightCard';
import "../sectionsStyling/Result.css";
import GreenSheild from "../assets/GreenSheild.svg";
import RedSheild from "../assets/RedSheild.svg";
import GetLinksIcon from "../assets/GetLinksIcon.svg";
import HeatMap from "../assets/HeatMap.jpeg";
import OriginalImage from "../assets/originalImage.png";
import BackHomeButton from "../components/BackHomeButton.jsx";
import OuterCircularProgressBar from '../components/OuterCircularProgressBar.jsx';
import ReportIcon from "../assets/ReportIcon.svg";
import PopUpBoxForReportCrime from '../components/PopUpBoxForReportCrime.jsx';
import LinkFoundPopUpBox from '../components/LinkFoundPopUpBox.jsx';
import LinksNotFoundPopUpBox from '../components/LinksNotFoundPopUpBox.jsx';
import DownloadLogo from "../assets/DownloadLogo.svg";
import ReAnalyseLogo from "../assets/ReAnalyseLogo.svg"

import { useLocation } from 'react-router-dom';

const Result = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false); // State to control the report pop-up visibility
  const [isLinkPopUpVisible, setIsLinkPopUpVisible] = useState(false); // State to control the links pop-up visibility


  const location = useLocation();
  const { percentageMorphed, searchResult } = location.state || {};
  // Function to toggle the report pop-up visibility
  const handleReportClick = () => {
    setIsPopUpVisible(true);
  };

  // Function to close the report pop-up
  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  // Function to toggle the links pop-up visibility
  const handleGetLinksClick = () => {
    setIsLinkPopUpVisible(true);
  };

  // Function to close the links pop-up
  const closeLinksPopUp = () => {
    setIsLinkPopUpVisible(false);
  };

  return (
    <div className='ResultSectionMainOuter'>
      <div className='ResultSectionOuter'>
        <div className='BackButtonInResult'>
          <BackHomeButton />
        </div>
        <div className="ResultSection">
          <h2 className='ResultHeadline'>RESULT</h2>
          <div className='ResultSectionSpotlightOuterBox'>
            <div className='border-gradient-color'></div>
            <p className='CardNumber'>3</p>
            <SpotlightCard className="custom-spotlight-card ResultSectionSpotlight" spotlightColor="rgba(0, 229, 255, 0)">
              <div className='CircleProgressBarShieldLinks'>
                <div className='CircleProgressBarWithButton'>
                  <OuterCircularProgressBar percentage={percentageMorphed} />
                  <div className='ReportButton' onClick={handleReportClick}>
                    <p className='ReportText'>Report</p>
                    <img src={ReportIcon} alt="Report Icon" />
                  </div>
                </div>
                <div className="ShieldAndLinks">
                  <div className='Shield'>
                    <p className='ShieldAboveText'>{percentageMorphed > 49 ? "UNSAFE" : "SAFE"}</p>
                    <img src={percentageMorphed > 49 ? RedSheild : GreenSheild} alt="Red Shield" />
                  </div>
                  <div className='UploadAndGetLinks'>
                    <p className='WhereUploadedText'>Where Uploaded?</p>
                    <div className='GetLinks' onClick={handleGetLinksClick}>
                      <img src={GetLinksIcon} alt="Get Links Icon" />
                      <p>Get Links</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='PhotosAndHeatMap'>
                <div className='PhotosOfUploaded'>
                  <img src={OriginalImage} alt="Original Image" />
                  <img src={HeatMap} alt="Heat Map" />
                </div>
                <div className='HeatMapAnalysis'>
                  <p className='HeatMapText'>Heat Map</p>
                  <p className='AnalysisText'>Analysis</p>
                </div>
              </div>
              <div className='ResultSectionBottomBottons'>
                <div className='ReAnalyseButton'>
                  <p className='ReAnalyseText'>Re-Analyse</p>
                  <img src={ReAnalyseLogo} alt="" />
                </div>
                <div className='DownloadReportButton'>
                  <p className='DownloadText'>Download Report</p>
                  <img src={DownloadLogo} alt="" />
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
        {/* Conditionally render the PopUpBoxForReportCrime component */}
        {isPopUpVisible && (
          <div onClick={e => e.stopPropagation()}>
            <div className='PopUpBackgroundBlur' onClick={closePopUp}></div>
            <PopUpBoxForReportCrime closePopUp={closePopUp} /> {/* Pass a closePopUp prop if needed */}
          </div>
        )}

        {/* Conditionally render the LinkFoundPopUpBox component */}
        {isLinkPopUpVisible && (
          <div onClick={e => e.stopPropagation()}>
            <div className='PopUpBackgroundBlur' onClick={closeLinksPopUp}></div>
            {percentageMorphed > 49 && searchResult.length>0?
              <LinkFoundPopUpBox closePopUp={closeLinksPopUp} searchResult={searchResult} /> :
              <LinksNotFoundPopUpBox closePopUp={closeLinksPopUp} />
            }
          </div>
        )}

        <div className='BorderBottomForSection'></div>
      </div>
    </div>
  );
}

export default Result;
