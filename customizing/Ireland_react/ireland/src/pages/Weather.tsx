import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Weather = () => {
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  return <Container></Container>;
};

export default Weather;
