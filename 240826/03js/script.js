// geolocation = > 사용자의 위치를 파악하기 위한 목적의 API

// getCurrentPosition(successCB, errorCB, option)

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position)

  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const erroPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
    
    let watchId = navigator.geolocation.watchPosition(showPosition, erroPosition, options);

    setTimeout(() => {
      navigator.geolocation.clearWatch();
    }, 30000)
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }   
});
