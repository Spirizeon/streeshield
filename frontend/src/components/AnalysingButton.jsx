import React from 'react';
import "../componentsStyling/AnaylsingButton.css"
const AnalysingButton = ({ textColor, backgroundColor, Icon }) => {
  return (
    <div className='AnalysingButton' style={{backgroundColor:backgroundColor}}>
      <p className='ViewResultText' style={{ color: textColor}}>
        View Result
      </p>
      <img src={Icon} alt="" />
    </div>
  );
};

export default AnalysingButton;
