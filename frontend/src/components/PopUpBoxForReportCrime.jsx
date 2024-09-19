import React from 'react'
import NationEmblemIcon from "../assets/NationEmblemIcon.svg";
import RedSheild from "../assets/RedSheild.svg";
import ReportIcon from "../assets/ReportIcon.svg"
import "../componentsStyling/PopUpBoxForReportCrime.css";
import CrossIcon from "../assets/CrossIcon.svg";

const PopUpBoxForReportCrime = ({closePopUp}) => {
  return (
    <div className="popUpOuter">
      <img src={CrossIcon} alt="" className='CrossIconInCrimePopUp' onClick={closePopUp}/>
      <div className="PopUpBoxForReportCrime">
        <div className='NationalEmblemAndSubText'>
          <img src={NationEmblemIcon} alt="" />
          <p className='EmblemBelowText'>National Cyber Crime Reporting Portal</p>
        </div>
        <div className='PopUpShieldBoxAndBottomText'>
          <div className='PopUpShieldAndText'>
            <p className='PopUpUnSafeText'>UNSAFE</p>
            <img src={RedSheild} alt="" className='RedShieldInPopUp'/>
          </div>
          <div className='PopUpBoxBottomText'>
            <p className='PopUpBoxBottomTextFirstLine'>Your Media Has caught <span className='PopUpBoxBottomTextHighlight'>suspicious in our analysis</span></p>
            <p className='PopUpBoxBottomTextSecondLine'>You want to report to NCCRP.</p>
          </div>
        </div>
        <div className='ReportCyberCrimeButton'>
          <p className='ReportCyberText'>Report to Cyber Crime</p>
          <img src={ReportIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PopUpBoxForReportCrime
