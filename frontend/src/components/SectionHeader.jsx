import React from 'react'
import "../componentsStyling/SectionHeader.css";
const SectionHeader = ({title,subtitle}) => {
  return (
    <div>
      <h2 className='section-title'>{title}</h2>
      <p className='section-subtitle'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader
