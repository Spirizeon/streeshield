import React from 'react'
import MainLogo from "../assets/PrimaryLogo.svg";
import LanguageLogo from "../assets/language-logo.svg";
import CheckYourMediaButton from "../components/CheckYourMediaButton";
import "../componentsStyling/Footer.css";
import WtspLogo from "../assets/WtspLogo.svg";
import InstaLogo from "../assets/InstaLogo.svg";
import MailLogo from "../assets/MailLogo.svg";
import { useLocation,useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const navigate = useNavigate();

    const handleScroll = (id) => {
        if (!isHomePage) return;
        const element = document.getElementById(id);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPosition - 111,
                behavior: 'smooth'
            });
        }
    };

    const handleScrollTop = () => {
        if (!isHomePage) return;
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleLogoClick = () => {
        if (isHomePage) {
            // Scroll to the top if already on the home page
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Navigate to home page if not on the home page
            navigate('/');
        }
    };

    return (
        <div className='Footer'>
            <div className='BackgroundBlurViolet'></div>
            <div className='FooterTop'>
                <div className='FooterTopLeft'>
                    <img src={MainLogo} alt="" className='LogoInFooter' onClick={handleLogoClick}/>
                    <button className='LanguageChange'>
                        <img src={LanguageLogo} alt="" />
                        <p>EN</p>
                    </button>
                    <CheckYourMediaButton />
                </div>
                <div className='FooterTopRight'>
                    <div className='FooterQuickLinks'>
                        <h3>Quick Links</h3>
                        <p onClick={handleScrollTop}>About</p>
                        <p onClick={() => handleScroll('indian-stats')}>Stats</p>
                        <p onClick={() => handleScroll('real-stories')}>Case Study</p>
                        <p onClick={() => handleScroll('faq-section')}>FAQ</p>
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
