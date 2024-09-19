import React from 'react';
import SpotlightCard from '../components/SpotlightCard'
import upload from "../assets/upload.svg";
import SmallUploadButton from "../assets/SmallUploadButton.svg";
import "../sectionsStyling/BeforeUploadSection.css";

const BeforeUploadSection = () => {
  return (
    <div>
            <div className='UploadSection'>
                <div className='UploadSectionSpotlightOuterBox'>
                    <div className='border-gradient-color'></div>
                    <p className='CardNumber'>1</p>
                    <SpotlightCard className="custom-spotlight-card UploadSectionSpotlight" spotlightColor="rgba(0, 229, 255, 0)">
                        <img src={upload} alt="" />
                        <button className='uploadbutton'>
                            <img src={SmallUploadButton} alt="" />
                            <p>Upload Here</p>
                        </button>
                        <div className='uploadsectiontotaltext'>
                            <div className='draganddroptext'>
                                <p><span className='dragdroptext'>Drag and drop</span> your file here</p>
                                <p>or click to <span className='uploadbuttontext'>upload button</span>.</p>
                            </div>
                            <div className='filesizeformat'>
                                <p>Max file size 1GB. supported file types</p>
                                <p>(e.g., JPG, PNG, MP4)</p>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div> 
  )
}

export default BeforeUploadSection
