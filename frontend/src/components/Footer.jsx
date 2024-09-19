import React from 'react'
import MainLogo from "../assets/MainLogo.svg";
import LanguageLogo from "../assets/language-logo.svg";
import CheckYourMediaButton from "../components/CheckYourMediaButton";
import "../componentsStyling/Footer.css";
import WtspLogo from "../assets/WtspLogo.svg";
import InstaLogo from "../assets/InstaLogo.svg";
import MailLogo from "../assets/MailLogo.svg";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterTop'>
                <div className='FooterTopLeft'>
                    <img src={MainLogo} alt="" />
                    <button className='LanguageChange'>
                        <img src={LanguageLogo} alt="" />
                        <p>EN</p>
                    </button>
                    <CheckYourMediaButton />
                </div>
                <div className='FooterTopRight'>
                    <div className='FooterQuickLinks'>
                        <h3>Quick Links</h3>
                        <p>About</p>
                        <p>Stats</p>
                        <p>Case Study</p>
                        <p>FAQ</p>
                    </div>
                    <div className='FooterSupport'>
                        <h3>Support</h3>
                        <p>customer care</p>
                        <p>Terms & conditions</p>
                        <p>cookies</p>
                        <p>policy</p>
                    </div>
                </div>
            </div>
            <div className='FooterBottom'>
                <div className='FooterSocialMedia'>
                    <div className='FooterLine'></div>
                    <div className='FooterSocialMediaThreeIcons'>
                        <img src={WtspLogo} alt="" />
                        <img src={InstaLogo} alt="" />
                        <img src={MailLogo} alt="" />
                    </div>
                    <div className='FooterLine'></div>
                </div>
                <div className='FooterBottomContent'>
                    <div className='FooterBottomCopyWrite'>
                        <p>Copyright © 2024 Stree Shield. All rights reserved</p>
                    </div>
                    <div className='FooterBottomLinks'>
                        <p>Legal</p>
                        <p>Privacy</p>
                        <p>Site-Map</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
