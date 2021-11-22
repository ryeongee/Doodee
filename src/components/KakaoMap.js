import React, { useEffect, useRef, useState } from 'react';
import './KakaoMap.css'

const { kakao } = window;

const KakaoMap = () => {
  
  const [_map,_setMap] = useState();
  const [_overlay,_setOverlay] = useState('true');
  const [_closeBtn,_setCloseBtn] = useState();
  const closeRef = useRef(null);


 
  
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    const options = { //지도를 생성할때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.563, 126.903), //지도의 중심좌표
      level: 3, //지도의 레벨 (확대,축소 정도)
      disableDoubleClickZoom: true
    }; 

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    map.setZoomable(false); //스크롤 줌 막기
    
    
    // 마커
    const markerPosition  = new kakao.maps.LatLng(37.563, 126.903); // 마커가 표시될 위치입니다

    
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map,
        clickable: true
    });  

    marker.setMap(map);  // 마커를 표시합니다


    // 커스텀오버레이
    const content = '<div class="wrap">' +    
    '    <div class="info">' +    
    '        <div class="title">' + 
    '            DooDee' + 
    '            <div id="close_btn" class="close" onClick=closeOverlay() title="닫기"></div>' + 
    '        </div>' +   
    '    </div>' + 
    '</div>' ;
    ; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    
    
    const customOverlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      clickable: true,
      position: marker.getPosition()       
    });

    customOverlay.setMap(map);
    _setOverlay('true');   // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다

    console.log(_overlay)
    
    
    kakao.maps.event.addListener(marker, 'click', function() {
      customOverlay.setMap(map);
      console.log('show');
      _setOverlay("false");
    });  // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    
 
    const closeOverlay = () => {
      customOverlay.setMap(null);     
    };  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다

    kakao.maps.event.addListener(customOverlay, 'click', closeOverlay());  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
  
     
 
    
    const close_btn = document.getElementById("close_btn");


    _setMap(map);  //map 객체를 useEffect 밖으로 꺼냄
    // _setOverlay(customOverlay);
    _setCloseBtn(close_btn);
  }, []);


  // 줌 버튼 함수
  const zoomIn = () => {
    _map.setLevel(_map.getLevel() - 1);
  };  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다


  const zoomOut = () => {
    _map.setLevel(_map.getLevel() + 1);
  };   // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다



  // const closeOverlay = () => {
  //   _overlay.setMap(null);     
  // };

  // _closeBtn.addEventListener("click", function() {
  //   // _overlay.setMap(null);
  //   console.log('close');
  // });
 


  return (
    <>
    <div className='map_wrap'>  
      <div id='map' className='kakaomap'></div>
      {/* 지도 확대, 축소 컨트롤 div 입니다 */}
      <div className="custom_zoomcontrol radius_border"> 
          <div onClick={zoomIn}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" /></div>  
          <div onClick={zoomOut}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" /></div>
      </div>
    </div>
    </>
  );
};

export default KakaoMap;