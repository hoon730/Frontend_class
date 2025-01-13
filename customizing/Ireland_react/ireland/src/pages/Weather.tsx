import React, { useRef, useState } from "react";
import styled from "styled-components";
import { transInfo, weatherIcons } from "../utils";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Container = styled.div``;

const Inner = styled.div``;

const Top = styled.div`
  margin-bottom: 50px;

  & > span:first-child {
    display: block;
    color: ${(props) => props.theme.subColor};
    font-weight: 600;
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 40px;
    font-size: 2rem;
    span {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        width: 100%;
        height: 4px;
        background: ${(props) => props.theme.mainColor};
      }
    }
  }

  & > span:last-child {
    font-weight: 600;
  }
`;

const Bottom = styled.div`
  display: flex;
  gap: 150px;
  height: 600px;

  & > div {
    width: 50%;
  }
`;

const WeatherBox = styled.div`
  padding: 30px 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.6);
  margin-bottom: 30px;
`;

const Desc = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.3);
`;

const InputBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  input {
    background: #fff;
    border: none;
  }
`;

const Form = styled.form``;

const SearchInput = styled.input`
  width: 70%;
  padding: 10px 0 10px 30px;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`;

const SubmitLabel = styled.label`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #19da33;

  svg {
    color: #fff;
    font-size: 24px;
  }
`;

const SubmitInput = styled.input`
  display: none;
`;

const City = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.6);
`;

const Transportation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;
const Trans = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-weight: bold;
  gap: 60px;
  text-align: center;

  svg {
    font-size: 4rem;
  }
`;

const Weather = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

  const getWeatherIcon = (weather: string) => {
    const targetIcon = weatherIcons.find((item) => item.name === weather);
    return targetIcon;
  };

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const weather = data.weather[0]?.main;
    getWeatherIcon(weather);
  };

  // const getCurrentLocation = () => {
  //   window.navigator.geolocation.getCurrentPosition(({ coords }) => {
  //     let lat = coords.latitude;
  //     let lon = coords.longitude;
  //     getWeatherByCurrentLocation(lat, lon);
  //   });
  // };

  const getCoordinates = async (city: string) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return { lat: data[0]?.lat, lon: data[0]?.lon };
  };

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const city = searchRef.current?.value || "";
      const { lat, lon } = await getCoordinates(city);
      getWeatherByCurrentLocation(lat, lon);
    }
  };

  return (
    <Container>
      <Inner className="inner">
        <Top>
          <span>Plan your trip</span>
          <h3>
            <span>All</span> the useful information you need
          </h3>
          <span>Trip advice to get the most out of your holidays</span>
        </Top>
        <Bottom>
          <WeatherBox
            style={{
              background: `url(/img/weather.jpg) center/cover no-repeat`,
            }}
          >
            <Title>The weather in Ireland</Title>
            <Desc>
              <InputBox>
                <SearchInput
                  type="text"
                  ref={searchRef}
                  placeholder="(search other destinations)"
                  onKeyDown={handleSearch}
                />
                <SubmitLabel htmlFor="enter">
                  <HiMiniMagnifyingGlass />
                </SubmitLabel>
                <SubmitInput id="enter" type="button" value="" />
              </InputBox>
              <City>Today in: </City>
            </Desc>
          </WeatherBox>
          <Transportation>
            {transInfo.map((item) => (
              <Trans key={item.id}>
                {item.icon}
                <span>{item.text}</span>
              </Trans>
            ))}
          </Transportation>
        </Bottom>
      </Inner>
    </Container>
  );
};

export default Weather;
