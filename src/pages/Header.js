import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
 

const Header = () => {


    const [isOn, setIsOn] = useState();
   
    const handleToggle = () => {
        setIsOn(!isOn)
    }

    const toggleOff = () => {
        setIsOn();
    }

    useEffect(() => {
        window.addEventListener('resize', function(){
            if(window.innerWidth > 1024) {
                toggleOff();
            }
        });
        return () => {
            window.removeEventListener('resize', toggleOff);
        }
    },[]);


    return (
        <>
        <div className='header'>
            <div className='logo' onClick={toggleOff}>
                <Link to='/'>
                    <img 
                        src = 'https://static.wixstatic.com/media/f1b974_dffb61ce0016439e92f499e66e57a716~mv2.png/v1/fill/w_243,h_62,al_c,q_85,usm_0.66_1.00_0.01/logo.webp'
                        alt = 'doodee logo'
                    />
                </Link>
            </div>
            <div className='phone-num'>
                010 0000 0000
            </div>
            <div className={'menus toggle ' + (isOn ? 'toggle-on' : '')}>
                <ul className='menus-btn'>
                    <Link to='/' >
                        <li className = 'home-btn' onClick={toggleOff}>Home</li>
                    </Link>
                    <Link to='/process' >
                        <li className = 'process-btn' onClick={toggleOff}>Process</li>
                    </Link>
                    <div className='projects-dropdown'>
                        <Link to='/projects'>
                            <li className = 'projects-btn' onClick={toggleOff}>Projects</li>
                        </Link>
                        <ul className='projects-dropdown-menus'>
                            <Link to='/housing'>
                                <li className = 'projects-housing-btn' onClick={toggleOff}>Housing</li>
                            </Link>
                            <Link to='/commercial'>
                                <li className = 'projects-commercial-btn' onClick={toggleOff}>Commercial</li>
                            </Link>
                        </ul>
                    </div>
                    <Link to='/estimates'>
                        <li className = 'estimates-btn' onClick={toggleOff}>Estimates</li>
                    </Link>
                    <Link to='/contact'>
                        <li className = 'contact-btn' onClick={toggleOff}>Contact Us</li>
                    </Link>
                </ul>
                
            </div>
            <div className='toggle-btn' onClick={handleToggle}>
                {/* Header Menu Toggle Button */}
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
            </div>
        </div>
        </>
    );  
};

export default Header;