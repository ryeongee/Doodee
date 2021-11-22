import React from 'react';
import './View1.css'

const View1 = () => {
    return (
        <>
        <div className='view_1'>
            <div className='description'>
                <ul className='desc_items'>
                    <li>year</li>
                    <li>location</li>
                    <li>area</li>
                    <li>use</li>
                </ul>
                <ul className='desc_contents'>
                    <li>2020.01</li>
                    <li>서울시 송파구</li>
                    <li>33py</li>
                    <li>주거</li>
                </ul>
            </div>
            <ul className='project_pic'>
                <li>
                    <img src="https://static.wixstatic.com/media/f1b974_22e5a96d434545d5bb80a7af1278b862~mv2.jpg/v1/fill/w_1350,h_900,al_c,q_85,usm_0.66_1.00_0.01/9.webp" alt="거실" />
                </li>
                <li>
                    <img src="https://static.wixstatic.com/media/f1b974_86dee0419c3c4be4a977fa4b843a8cec~mv2.jpg/v1/fill/w_1350,h_900,al_c,q_85,usm_0.66_1.00_0.01/11.webp" alt="주방" />

                </li>
                <li>
                    <img src="https://static.wixstatic.com/media/f1b974_8fe10a42a1174b9b90bd54581c9ddc3c~mv2.jpg/v1/fill/w_1350,h_2025,al_c,q_90,usm_0.66_1.00_0.01/20.webp" alt="현관" />

                </li>
                <li>
                    <img src="https://static.wixstatic.com/media/f1b974_7c1578f986e943b2b6641719b0eeaffa~mv2.jpg/v1/fill/w_1350,h_2025,al_c,q_90,usm_0.66_1.00_0.01/7.webp" alt="화장실" />

                </li>
            </ul>
            <div className='list_btns'>

            </div>
        </div> 
        </>
    );  
};

export default View1;