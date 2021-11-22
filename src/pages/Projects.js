import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <>
        <div className='projects'>
            <h1 className='projects_title'>P R O J E C T S</h1>
            <div className='projects_links'>
                <div className='housing_link'>
                    <Link to='/housing' style={{ textDecoration: 'none', color: 'white' }}>
                        <div className='housing_btn'>
                            <img 
                            src="https://static.wixstatic.com/media/f1b974_bcb11684932a48acafa398e0b22e462f~mv2.jpg/v1/fill/w_875,h_581,al_c,q_85,usm_0.66_1.00_0.01/shutterstock_766041676_%EC%9B%B9%EC%9A%A9.webp" 
                            alt="Housing" 
                            />
                            <div className='housing_btn_background'></div>
                            <div className='housing_btn_box'>Housing</div>
                        </div>
                    </Link>
                </div>
                <div className='commercial_link'>
                    <Link to='/commercial' style={{ textDecoration: 'none', color: 'white' }}>
                        <div className='commercial_btn'>
                            <img 
                                src="https://static.wixstatic.com/media/f1b974_d442755339894e48adff21c0ace335c6~mv2.jpg/v1/fill/w_875,h_581,al_c,q_85,usm_0.66_1.00_0.01/shutterstock_1065115037_%EC%9B%B9%EC%9A%A9.webp" 
                                alt="Commercial" 
                            />
                            <div className='commercial_btn_background'></div>
                            <div className='commercial_btn_box'>Commercial</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );  
};

export default Projects;