import React, { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DustbinIcon from "../assets/DustbinIcon.svg";
import GreenTickIcon from "../assets/GreenTickIcon.svg";
import MediaIcon from "../assets/MediaIcon.svg";
import "../sectionsStyling/UploadingProgress.css";
import AnalyseIcon from "../assets/AnalyseIcon.svg";
import MediaPreview from '../components/MediaPreview';
import { useNavigate } from 'react-router-dom';
import CrossIcon from "../assets/CrossIcon.svg";

const UploadingProgress = ({ fileName, fileSize, fileUrl, percentageMorphed, searchResult }) => {
  const [showPreview, setShowPreview] = useState(false); // State to control the preview modal
  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

  // Function to toggle the preview modal
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Function to handle navigation to /analyse and pass the data
  const handleAnalyseClick = () => {
    navigate('/analyse', { state: { percentageMorphed, searchResult } });
  };

  return (
    <div>
      <div className='UploadingProgressSpotlightOuterBox'>
        <div className='border-gradient-color'></div>
        <p className='CardNumber'>1</p>
        <SpotlightCard className="custom-spotlight-card UploadingProgressSpotlightCard" spotlightColor="rgba(0, 229, 255, 0)">
          <div className="UploadingProgressSpotlight">
            <div className='MediaWhiteCardAndBottomText'>
              <div className='MediaWhiteCard'>
                <div className='MediaAndType'>
                  <img src={MediaIcon} alt="" />
                  <div className='MediaName'>
                    <span className='MediaInsideName'>{fileName}</span>
                    {/* When "Preview" is clicked, toggle the preview modal */}
                    <span className='PreviewText' onClick={togglePreview}>Preview</span>
                  </div>
                </div>
                <div className='DataSizeAndIcon'>
                  <p className='DataSize'>{fileSize} MB</p>
                  <div></div>
                  <img src={DustbinIcon} alt="" />
                </div>
              </div>
              <div className='GreenBottomTextAndIcon'>
                <img src={GreenTickIcon} alt="" />
                <p className='GreenBottomText'>Successfully Uploaded</p>
              </div>
            </div>
            {/* Replacing NavLink with a button that triggers the navigation */}
            <div className="AnalyseButtonOuter" onClick={handleAnalyseClick}>
              <div className='AnalyseButton'>
                <img src={AnalyseIcon} alt="" />
                <p className='AnalyseText'>Analyse</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Conditionally render the MediaPreview component as a modal */}
      {showPreview && (
        <div className="media-preview-modal">
          <div className="media-preview-content">
            <div className="PopUpBackgroundBlur" onClick={togglePreview}></div>
            <MediaPreview fileUrl={fileUrl} fileName={fileName} togglePreview={togglePreview} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadingProgress;
