import React from 'react'
import SmallUploadButton from "../assets/SmallUploadButton.svg";
import "../componentsStyling/CheckYourMediaButton.css";
import { NavLink} from "react-router-dom";
import ShinyText from './ShinyText';
const CheckYourMediaButton = () => {
  return (
    <NavLink to="/upload" className='CheckYourMediaButton'>
        <img src={SmallUploadButton} alt="" />
        <div><ShinyText text="Check Your Media" disabled={false} speed={3} className='TextInShinyButton' /></div>
    </NavLink>
  )
}

export default CheckYourMediaButton
