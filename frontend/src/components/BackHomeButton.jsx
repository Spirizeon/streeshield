import React from 'react'
import BackArrowHome from "../assets/BackArrowHome.svg";
import "../componentsStyling/BackHomeButton.css";
import {Link} from "react-router-dom";

const BackHomeButton = () => {
  return (
    <Link to="/" className='BackHomeButton'>
      <img src={BackArrowHome} alt="" />
    </Link>
  )
}

export default BackHomeButton
