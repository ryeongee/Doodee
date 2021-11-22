import React from 'react';
import { Link } from 'react-router-dom';
import './Housing.css';

const Housing = () => {
    return (
        <>
        <div className='housing'>
            <div className='housing_title'>
                <h1>H O U S I N G</h1>
            </div>
            <ul className='housing_grid_container'>
                <li className='housing_grid_item'>
                    <figure>
                        <Link to='/view/1'>
                            <img src="https://static.wixstatic.com/media/f1b974_0c1d6cc240f6486facd1ddba80e07adc~mv2.jpg/v1/fill/w_543,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="잠실 트리지움" />
                        </Link>
                        <figcaption>잠실 트리지움</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_90f14dcd618b4525b15e2b76afa402e6~mv2.jpg/v1/fill/w_543,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="문래 sk리더스뷰" />
                        <figcaption>문래 sk리더스뷰</figcaption>
                    </figure>

                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_49a994e5d5c643a9ac6848fb0c601332~mv2.jpg/v1/fill/w_543,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="분당 아데나펠리스" />
                        <figcaption>분당 아데나팰리스</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_bc5cc325405f4d1eaffbbac0c828b72a~mv2.jpg/v1/fill/w_543,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="문래 sk리더스뷰" />
                        <figcaption>문래 sk리더스뷰</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_b6be8bb27f454fa18ca17e41d75ff3b6~mv2.jpg/v1/fill/w_540,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="이촌동 미주아파트" />
                        <figcaption>이촌동 미주아파트</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_3dc5dd5c49884186a1a1a4b3dc3c91e9~mv2.jpg/v1/fill/w_540,h_540,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="하남 강일스윗" />
                        <figcaption>하남 강일스윗</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_43ee383449fe461987b974a61f119b63~mv2.jpg/v1/fill/w_582,h_582,al_c,q_80,usm_0.66_1.00_0.01/DSC_2752-22.webp" alt="수서 신동아" />
                        <figcaption>수서 신동아</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_9ab6bb58927c4618b43e34b0a5971261~mv2.jpg/v1/fill/w_540,h_543,al_c,lg_1,q_80/%EC%8D%B8%EB%84%A4%EC%9D%BC.webp" alt="서초 참누리" />
                        <figcaption>서초 참누리</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_e535ad864f684b34bbaa1d1b61dd4ab1~mv2.jpg/v1/fill/w_582,h_582,al_c,q_80,usm_0.66_1.00_0.01/IMG_1561.webp" alt="잠실 리센츠" />
                        <figcaption>잠실 리센츠</figcaption>
                    </figure>
                </li>
                <li className='housing_grid_item'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/f1b974_50521dfa8a4e4f738ccd4dd320e3a8a8~mv2.jpg/v1/fill/w_579,h_582,al_c,q_80,usm_0.66_1.00_0.01/20181212_190216.webp" alt="김포 한강신도시" />
                        <figcaption>김포 한강신도시</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
        </>
    );  
};

export default Housing;