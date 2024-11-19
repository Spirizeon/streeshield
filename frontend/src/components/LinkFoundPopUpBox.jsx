import React from 'react';
import "../componentsStyling/LinkFoundPopUpBox.css";
import GetLinksIcon from "../assets/GetLinksIcon.svg";
import CrossIcon from "../assets/CrossIcon.svg";

const LinkFoundPopUpBox = ({ closePopUp, searchResult }) => {
  return (
    <div className='LinkFoundPopUpBoxOuter'>
      <div className='CrossIconDivInLinkPopUp'>
        <img src={CrossIcon} alt="" onClick={closePopUp} />
      </div>
      {
        searchResult.slice(0, 4).map((item, index) => { // Only show up to 4 items
          return (
            <div className='LinkAndIconInPopUp' key={index}>
              <img src={GetLinksIcon} alt="" />
              <a href={item} className='LinkInPopUp'>{item}</a>
            </div>
          );
        })
      }
    </div>
  );
}

export default LinkFoundPopUpBox;
