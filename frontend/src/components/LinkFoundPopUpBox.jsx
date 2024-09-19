import React from 'react'
import "../componentsStyling/LinkFoundPopUpBox.css";
import GetLinksIcon from "../assets/GetLinksIcon.svg";
import CrossIcon from "../assets/CrossIcon.svg";

const LinkFoundPopUpBox = ({closePopUp}) => {
  return (
    <div className='LinkFoundPopUpBoxOuter'>
        <div className='CrossIconDivInLinkPopUp'>
        <img src={CrossIcon} alt=""  onClick={closePopUp}/>
        </div>
      <div className='LinkAndIconInPopUp'>
        <img src={GetLinksIcon} alt="" />
        <a href="" className='LinkInPopUp'>https://sample.com/?drop=curtain&stone=mountain#skin</a>
      </div>
      <div className='LinkAndIconInPopUp'>
        <img src={GetLinksIcon} alt="" />
        <a href="" className='LinkInPopUp'>http://www.start.sample.org/sofa/ball.html</a>
      </div>
      <div className='LinkAndIconInPopUp'>
        <img src={GetLinksIcon} alt="" />
        <a href="" className='LinkInPopUp'>http://www.sample.edu/window#wash</a>
      </div>
    </div>
  )
}

export default LinkFoundPopUpBox
