import React from 'react';
import {Link} from 'react-router-dom'
import './Process.css';
const Process = () => {
    return (
        <>
            <link href="//db.onlinewebfonts.com/c/6dd2f2510b4a00a5461b2455928209c2?family=BrandonGrotW01-Light" rel="stylesheet" type="text/css"/>
            <link href="//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold" rel="stylesheet" type="text/css"/>
            <div className='process-container'>
                <div className='grid-container'>
                    <div className='first-grid-item'>
                        <h1>
                            process
                        </h1>
                        
                    </div>
                    <div className='second-grid-item'>
                        <div className='interior-flex-container'>
                            <div className='interior-flex-item'>
                                <div className='home-interior'>
                                    <Link to="/housing">                                
                                        <img src='https://static.wixstatic.com/media/f1b974_156efcb102334840a2fd06fd4b00d9ec~mv2.jpg/v1/crop/x_359,y_0,w_1997,h_2000/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01/449.webp' alt='no-img'></img>
                                    </Link>
                                    <h2>주거공간</h2>
                                </div>

                            </div> 
                            <div className='interior-flex-item'>
                                <div className='commercial-interior'>
                                    <Link to="/commercial">                                
                                        <img src='https://static.wixstatic.com/media/f1b974_91e07437552442d3a538be44d3febc31~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01/shutterstock_1065115037.webp' alt='no-img'></img>
                                    </Link>
                                    <h2>상업공간</h2>
                                </div>
                            </div>                            
                            <div className='interior-flex-item'>
                                <div className='office-interior'>
                                    <img src='https://static.wixstatic.com/media/f1b974_78166cee4dbf452197d9c55273d133c2~mv2.jpg/v1/crop/x_0,y_578,w_2188,h_2189/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01/shutterstock_1223365972_%EC%9B%B9%EC%9A%A9.webp' alt='no-img'></img>
                                    <h2>사무공간</h2>
                                </div>
                            </div>
                            <div className='interior-flex-item'>
                                <div className='styling'>
                                    <img src='https://static.wixstatic.com/media/f1b974_3e4ac78ac0cd466e8d684a01d8d9bfe0~mv2.jpg/v1/crop/x_1404,y_0,w_4032,h_4032/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01/1854.webp' alt='no-img'></img>
                                    <h2>스타일링</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third-grid-container'>
                        <h2>construction process</h2>
                        <img src='https://static.wixstatic.com/media/f1b974_313aa06e443b45fbae8a7be99352f2b1~mv2.png/v1/fill/w_87,h_484,al_c,q_85,usm_0.66_1.00_0.01/icon.webp' alt='no-img'></img>
                        <div className='cp-grid-container'>
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>
                                    1. 상담신청
                                </h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>홈페이지나 전화를 통해 상담신청</p>
                            </div>
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>2. 현장실측</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>현장을 직접 방문하여 내부 실측 및 소유한 가구를 실측</p>
                            </div>                            
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>3. 디자인미팅</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>설계, 디자인, 마감재 협의 후 최종 견적 및 금액 안내</p>
                            </div>                            
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>4. 계약</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>견적 상담 후 1차 계약서를 작성하며 착공일 및 준공일 협의, 공사절차, 유의사항 등에 대한 전반적인 안내</p>
                            </div>                            
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>5. 공사진행</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>최종 확정된 설계와 디자인으로 공사를 진행</p>
                            </div>                            
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>6. 공사완료 및 사진촬영</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>일정 마감 후 사진촬영이 진행되며 홈페이지, 홍보, 사후 관리 목적의 자료로 사용</p>
                            </div>                            
                            <div className='cp-grid-item'></div>
                            <div className='cp-grid-item'>
                                <h2>7. 사후관리(A/S)</h2>
                            </div>
                            <div className='cp-grid-item'>
                                <p>공사 완료 후 A/S기간은 1년이며 신속하고 정확한 사후 보수·관리 서비스 제공</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default Process;

