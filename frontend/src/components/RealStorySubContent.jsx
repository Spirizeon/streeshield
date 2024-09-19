import React from 'react';
import "../componentsStyling/RealStorySubContent.css";

const RealStorySubContent = ({title,subtitle}) => {
  return (
    <div className='RealStorySubContent'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}

export default RealStorySubContent
