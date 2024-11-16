import React, { useState, useEffect } from 'react';
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
  const [showPreview, setShowPreview] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width
  const navigate = useNavigate();

  useEffect(() => {
    // Event listener to update screen width on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleAnalyseClick = () => {
    navigate('/analyse', { state: { percentageMorphed, searchResult } });
  };

  // Determine the length of the fileName to display based on screen size
  const truncatedFileName = screenWidth < 560
    ? (fileName.length > 5 ? `${fileName.slice(0, 5)}...` : fileName)
    : (fileName.length > 15 ? `${fileName.slice(0, 15)}...` : fileName);

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
                    <p className='FileName'>{truncatedFileName}&nbsp; &nbsp;</p>
                    <span className='PreviewText' onClick={togglePreview}>Preview</span>
                  </div>
                </div>
                <div className='DataSizeAndIcon'>
                  <p className='DataSize'>{fileSize}MB</p>
                  <div className='DataSizeAndIconLine'></div>
                  <img
                    src={DustbinIcon}
                    alt=""
                    onClick={() => window.location.reload()}
                  />

                </div>
              </div>
              <div className='GreenBottomTextAndIcon'>
                <img src={GreenTickIcon} alt="" />
                <p className='GreenBottomText'>Successfully Uploaded</p>
              </div>
            </div>
            <div className="AnalyseButtonOuter" onClick={handleAnalyseClick}>
              <div className='AnalyseButton'>
                <img src={AnalyseIcon} alt="" />
                <p className='AnalyseText'>Analyse</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>

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
