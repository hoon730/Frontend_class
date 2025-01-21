import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop")
    center/cover no-repeat; */
  background: #000 ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      console.log(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCityChange = (city) => {
    if (city === "") setCity(null);
    else setCity(city);
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      });
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <Wrapper img={background}>
        <Contents>
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
}

export default App;

// api
// - firebase
// - weather
// - the movie date base
// - coin
// - 공공데이터 포털사이트 > api

// Application : 웹/앱 (*제풀)
// Programming : 프로그래밍
// Interface : 상호작용하는 방식

// REST API
// - from
// - method : get // post // put // delete
// garphql API

// 1. 바닐라 자바스크립트를 활용해서 환경변수를 설정. env.js
// => 모듈의 형태로 import // export

// 2. 무조건 루트폴더

// REACT_APP_API_KEY=9a5e256f334bf8b56aa0d722ac419f38 //.env 내용
// const API_key = process.env.REACT_APP_API_KEY; // 키를 사용할때 가져오는 방법

// 참고로 !! .env에서 변수가 REACT_APP_ 으로 시작해야함!! 또한 .env는 반드시 루트폴더에 넣어야함(src안에 넣으면 안돼요~)

// VITE 템플릿의 경우
// vite 환경에서는 다음과 같이 가져와야한다.
// const API_key = import.meta.env.VITE_API_KEY;
// 또한 vite에서는 VITE_로 반드시 시작해야한다.
// VITE_API_KEY="9a5e256f334bf8b56aa0d722ac419f38" //또한 vite에서는 .env에서 키를 문자열로 줘야함.
// 마지막으로 설정이 완료되면 반드시 서버를 껐다켜줘야 된다. (이건 cra, vite 상관없이 다 해당)

// 2. 굳이 1개의 key로 그냥

// 1개의 API 서버에서 복수의 API 데이터를 가져와야 하는 경우!!
// > useEffect
// > state의 초기값이 null

// > 전체적으로 데이터를 찾아오지 못하는 경우!!
// > 단락회로 평가!!!

// > API 2개 날씨 & 언스플래시
// (*환경변수 활용 > 키 나눠서 관리)
// (*vite 경우)

// > react bootstrap
// > npm > roading spinner
