import React from 'react'
import MainLogo from "../assets/MainLogo.svg";
import LanguageLogo from "../assets/language-logo.svg";
import "../componentsStyling/NavBar.css";
import CheckYourMediaButton from './CheckYourMediaButton';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <div className='LogoOuter'>
            <img src={MainLogo} alt="" />
        </div>
        <div className='AllNavLinks'>
            <p>About</p>
            <p>Stats</p>
            <p>Case Study</p>
            <p>FAQ</p>
        </div>
        <div className='NavBarButton'>
            <button className='LanguageChange'>
                <img src={LanguageLogo} alt="" />
                <p>EN</p>
            </button>
            <CheckYourMediaButton/>
        </div>
    </nav>
  )
}

export default NavBar
