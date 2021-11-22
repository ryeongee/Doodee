import React from 'react';
import ReactPlayer from 'react-player';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-background-image'>
                <img
                    src='https://static.wixstatic.com/media/f1b974_3e1240307c724cf78be03a9485d38f67~mv2.jpg/v1/fill/w_1903,h_878,al_c,q_85/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.webp'
                    alt='Home Background'
                />
            </div>
            <div className='home-about'>
                <h2>About</h2>
                <p>
                    DooDee  ;  Do + Design의 합성어 <br/>
                    '디자인 하다' 를 모티브로 하는 인테리어 회사 입니다.<br/><br/>
                </p>
                <h2>Philosophy</h2>
                <p>
                    DOODEE / DO + DESIGN = 디자인 하다.<br/>
                    인테리어 어렵다? 쉽다!!<br/><br/>
                    DOODEE를 선택하는 순간 어려운 인테리어가 쉽게 바뀝니다<br/>
                    개인의 라이프스타일에 맞는 공간을 디자인해드립니다.
                </p>
            </div>
            <div className='home-insta-link'>

            </div>
            <div className='home-video'>
                {/* <video controls>
                    <source 
                        src='https://video.wixstatic.com/video/f1b974_7ee45bc0a5dc4eb980d5970b6b0f924b/720p/mp4/file.mp4'>

                    </source>
                </video> */}
                <ReactPlayer 
                    url='https://video.wixstatic.com/video/f1b974_7ee45bc0a5dc4eb980d5970b6b0f924b/720p/mp4/file.mp4'
                    width= '100%'
                    height= '360px'
                    playing= 'true'
                    loop= 'true'
                    controls= 'false'
                />
            </div>
            <div className='footer'> 
                <div className='home-footer'>
                    <div className='home-footer-name'>
                        <h2>DOODEE</h2>
                    </div>
                    <div className='home-footer-info'>
                        <h3>INFORMATION</h3>
                        <p>
                            상호명 두디 DOODEE <br/>
                            사업자등록번호 000-000-000 <br/>
                            서울시 마포구 망원동
                        </p>
                    </div>
                    <div className='home-footer-contact'>
                        <h3>CONTACT</h3>
                        <p>
                            010.0000.0000 <br/>
                            Email : abc@naver.com <br/>
                            Copyright(c)2020 doodee All Right Reserved  
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    );  
};

export default Home;