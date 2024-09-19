import React from 'react'
import "../componentsStyling/LinksNotFoundPopUpBox.css";
import CrossIcon from "../assets/CrossIcon.svg";

const LinksNotFoundPopUpBox = ({closePopUp}) => {
  return (
    <div className='LinksNotFoundPopUpBox'>
      <div className='NoLinksFoundCrossIconOuter'>
        <img src={CrossIcon} alt="" onClick={closePopUp}/>
      </div>
      <div className='LinksNotFoundText'>
        <p className='NoLinksAreTextInPopUp'>NO LINKS ARE</p>
        <p className='FoundTextInPopUp'>FOUND</p>
      </div>
    </div>
  )
}

export default LinksNotFoundPopUpBox
