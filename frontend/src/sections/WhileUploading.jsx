import React from 'react'
import SpotlightCard from '../components/SpotlightCard';
import CrossIconInUploading from "../assets/CrossIconInUploading.svg";
import MediaIcon from "../assets/MediaIcon.svg";
import AnalyzeIconInWhileUploading from "../assets/AnalyzeIconInWhileUploading.svg"
import HorizontalProgressBar from '../components/HorizontalProgressBar';

import "../sectionsStyling/WhileUploading.css";

const WhileUploading = ({progress,fileName,fileSize}) => {
  return (
    <div>
      <div className='WhileUploadingProgressSpotlightOuterBox'>
        <div className='border-gradient-color'></div>
        <p className='CardNumber'>1</p>
        <SpotlightCard className="custom-spotlight-card WhileUploadingProgressSpotlightCard" spotlightColor="rgba(0, 229, 255, 0)">
          <div className='InnerSpotlightCardInWhileUploading'>
            <div className='WhiteCardInWhileUploadingAndSubText'>
              <div className='WhiteCardInWhileUploading'>
                <div>
                  <img src={MediaIcon} alt="" className='MediaIconInWhileUploading'/>
                </div>
                <div className='FileNameSizeAndHorizontalProgressBar'>
                  <div className='FileNameAndSize'>
                    <p className='FileName'>{fileName}</p>
                    <p className='Size'>{fileSize} MB</p>
                  </div>
                  <div className='HorizontalProgressBarInUploading'>
                    <HorizontalProgressBar progress={progress} />
                  </div>
                </div>
                <div>
                  <div></div>
                  <img src={CrossIconInUploading} alt="" />
                </div>
              </div>
              <p className='SubTextInWhileUploading'>Uploading...</p>
            </div>
            <div className='AnalyzeButtonInWhileUploading'>
              <img src={AnalyzeIconInWhileUploading} alt="" />
              <p className='AnalyzeTextInWhileUploading'>Analyse</p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  )
}

export default WhileUploading
