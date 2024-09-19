import React, { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DustbinIcon from "../assets/DustbinIcon.svg";
import GreenTickIcon from "../assets/GreenTickIcon.svg";
import MediaIcon from "../assets/MediaIcon.svg";
import "../sectionsStyling/UploadingProgress.css";
import AnalyseIcon from "../assets/AnalyseIcon.svg";
import MediaPreview from '../components/MediaPreview';
import { NavLink } from 'react-router-dom';
import CrossIcon from "../assets/CrossIcon.svg";

const UploadingProgress = ({ fileName, fileSize, fileUrl }) => {
  const [showPreview, setShowPreview] = useState(false); // State to control the preview modal

  // Function to toggle the preview modal
  const togglePreview = () => {
    setShowPreview(!showPreview);
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
            <NavLink to="/analyse" className="AnalyseButtonOuter">
              <div className='AnalyseButton'>
                <img src={AnalyseIcon} alt="" />
                <p className='AnalyseText'>Analyse</p>
              </div>
            </NavLink>
          </div>
        </SpotlightCard>
      </div>
      
      {/* Conditionally render the MediaPreview component as a modal */}
      {showPreview && (
        <div className="media-preview-modal">
          <div className="media-preview-content">
            <div className="PopUpBackgroundBlur" onClick={togglePreview}></div>
            <MediaPreview fileUrl={fileUrl} fileName={fileName} togglePreview={togglePreview}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadingProgress;
