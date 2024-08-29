const showPos = (position) => {
  const url = "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=200&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=aYwVfNKHiEI7J8XZbHoziZ6juwpNYciHbUWvsCf7Xy4gevJobYr%2BQc0oDuOQcU7Vz8rbuoTVE2gDPR46%2FpiueA%3D%3D&_type=json"

  fetch(url)
  .then((response) => response.json())
  .then((json) => {

    console.log(json)

    const data = json.response.body.items.item;

    let markers = [];

    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker)

      const infowindow = new kakao.maps.InfoWindow({
        constent: data[i].facltNm,
      })

      const makeOverListener = ()=>{
        return()=>{
        infowindow.open(map,marker)
        }
      }

      const makeOutListener = (infowindow)=>{
        return()=>{
        infowindow.close()
        }
      }
      kakao.maps.event.addListener
      (marker,"mouseover",makeOverListener(map, marker,infowindow))
      kakao.maps.event.addListener
      (marker,"mouseout",makeOutListener(infowindow))
    }

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
  })
  
  const { latitude, longitude } = position.coords;
  const container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
  const mapOption = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  const map = new kakao.maps.Map(container, mapOption); //지도 생성 및 객체 리턴
      // 마커 클러스터러를 생성합니다
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10 // 클러스터 할 최소 지도 레벨
    });

  // 마커를 표시할 위치와 title 객체 배열입니다 
  // const positions = [
  //   {
  //       title: '이젠아카데미', 
  //       latlng: new kakao.maps.LatLng(latitude, longitude)
  //   },
  //   {
  //       title: '그린아카데미', 
  //       latlng: new kakao.maps.LatLng(37.5001513, 127.0290763)
  //   },
  //   {
  //       title: '그린컴퓨터아트학원 ', 
  //       latlng: new kakao.maps.LatLng(37.5001276, 127.0290304)
  //   },
  //   {
  //       title: 'SBS아카데미', 
  //       latlng: new kakao.maps.LatLng(37.4979437, 127.0265374)
  //   },
  //   {
  //       title: '코리아엔터아카데미',
  //       latlng: new kakao.maps.LatLng(37.4994554, 127.0290208)
  //   },
  //   {
  //       title: '더조은컴퓨터아카데미',
  //       latlng: new kakao.maps.LatLng(37.4944858, 127.030066)
  //   }
  // ];

  
};

const errPos = (err) => {
    alert(err.message);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPos, errPos);
  } else {
    alert("Geolocation is not available");
}