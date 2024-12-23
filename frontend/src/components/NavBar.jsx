import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Add useNavigate
import MainLogo from "../assets/PrimaryLogo.svg";
import LanguageLogo from "../assets/language-logo.svg";
import "../componentsStyling/NavBar.css";
import CheckYourMediaButton from './CheckYourMediaButton';
import Hambargar from "../assets/Hambargar.svg";
import CrossIcon from "../assets/CrossIcon.svg";

const NavBar = () => {
    const location = useLocation(); // Get the current location
    const isHomePage = location.pathname === '/'; // Check if the current route is '/'
    const navigate = useNavigate(); // Hook for navigating programmatically

    // State to manage the toggling of the hamburger menu icon and phone navbar display
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    
    const handleScroll = (id) => {
        if (!isHomePage) return;
        const element = document.getElementById(id);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPosition - 94,
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

    // Toggle the state when hamburger icon is clicked
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Styles to apply when not on the home page
    const disabledStyle = {
        color: '#838383',
        cursor: 'not-allowed',
    };

    return (
        <div className='NavBarOuter'>
            <nav className='NavBar'>
                <div className='LogoOuter'>
                    <img src={MainLogo} alt="" onClick={handleLogoClick} />
                </div>
                <div className='AllNavLinks'>
                    <p 
                        onClick={handleScrollTop} 
                        style={!isHomePage ? disabledStyle : {}} className='dummy'>
                        About
                    </p>
                    <p 
                        onClick={() => handleScroll('indian-stats')} 
                        style={!isHomePage ? disabledStyle : {}}>
                        Stats
                    </p>
                    <p 
                        onClick={() => handleScroll('real-stories')} 
                        style={!isHomePage ? disabledStyle : {}}>
                        Case Study
                    </p>
                    <p 
                        onClick={() => handleScroll('faq-section')} 
                        style={!isHomePage ? disabledStyle : {}}>
                        FAQ
                    </p>
                </div>
                <div className='NavBarButton'>
                    <button className='LanguageChange'>
                        <img src={LanguageLogo} alt="" />
                        <p>EN</p>
                    </button>
                    <div className='CheckMediaInNavBar'><CheckYourMediaButton /></div>
                    {/* Conditionally render the hamburger icon only on the home page */}
                    {isHomePage && (
                        <img 
                            src={isMenuOpen ? CrossIcon : Hambargar} 
                            alt="Menu Toggle" 
                            className='Hambargar' 
                            onClick={handleMenuToggle} 
                        />
                    )}
                </div>
            </nav>
            {/* Toggle PhoneNavBar visibility based on state */}
            <div className={`PhoneNavBar ${isMenuOpen ? 'open' : ''}`}>
                <p onClick={()=>{
                    handleScrollTop();
                    handleMenuToggle();
                    }}>About</p>
                <p onClick={() => {
                   handleScroll('indian-stats');
                   handleMenuToggle();
                }} >Stats</p>
                <p onClick={() => {
                    handleScroll('real-stories');
                    handleMenuToggle();
                }} >Case Study</p>
                <p onClick={() => {
                    handleScroll('faq-section');
                    handleMenuToggle();
                }}>FAQ</p>
            </div>
        </div>
    );
}

export default NavBar;
