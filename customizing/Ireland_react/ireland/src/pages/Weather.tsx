import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  getWeatherByCurrentLocation,
  getCoordinates,
  getForecastData,
} from "../api";
import { cityState, searchedCityState, forecastDataState } from "../atom";

import { transInfo } from "../utils";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { useRecoilState, useSetRecoilState } from "recoil";

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

const WeatherInfo = styled.div`
  display: flex;
  > div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  flex-direction: column;
`;
const Right = styled.div``;

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const WeatherDesc = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const CurrentTemp = styled.div`
  font-size: 4rem;
`;

const TempInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 50%;
  padding: 15px 0;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    font-size: 1.5rem;
  }
`;

const TempMax = styled.div`
  svg {
    color: #ffc107;
  }
`;
const TempMin = styled.div`
  svg {
    color: #1e8eff;
  }
`;

const ByDateInfo = styled.div``;

const DateInfo = styled.div``;
const Date = styled.div``;
const DateWeatherIcon = styled.div``;
const Temp = styled.div``;

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

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

const Weather = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useRecoilState(cityState);
  const setSearchedCity = useSetRecoilState(searchedCityState);
  const [forecastData, setForecastData] = useRecoilState(forecastDataState);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cityName = searchRef.current?.value || "";
      const { lat, lon } = await getCoordinates(cityName);
      if (lat && lon) {
        const weatherData = await getWeatherByCurrentLocation(lat, lon);
        const forecast = await getForecastData(lat, lon);
        setCity(weatherData);
        setSearchedCity({ name: cityName, lat, lon });
        setForecastData(forecast);
      }
    }
  };

  useEffect(() => {
    const getCurrentLocation = async () => {
      window.navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude;
        const lon = coords.longitude;
        const weatherData = await getWeatherByCurrentLocation(lat, lon);
        const forecast = await getForecastData(lat, lon);
        setCity(weatherData);
        setForecastData(forecast);
      });
    };
    getCurrentLocation();
  }, [setCity, setForecastData]);

  console.log(forecastData);

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
              <City>Today in: {city?.cityName || "Unknown"}</City>
              <WeatherInfo>
                <Left>
                  <WeatherIcon>
                    <img src={city?.weatherIconPath} alt={city?.desc} />
                    {/* {city?.img} */}
                  </WeatherIcon>
                  <WeatherDesc>{city?.desc}</WeatherDesc>
                </Left>
                <Right>
                  <CurrentTemp>
                    {city?.currentTemp
                      ? `${Math.floor(city.currentTemp)}°`
                      : "N/A"}
                  </CurrentTemp>
                </Right>
              </WeatherInfo>
              <TempInfo>
                <TempMax>
                  <span>
                    <ImArrowUp />
                  </span>
                  <span>
                    {city?.tempMax ? `${Math.floor(city.tempMax)}°` : "N/A"}
                  </span>
                </TempMax>
                <TempMin>
                  <span>
                    <ImArrowDown />
                  </span>
                  <span>
                    {city?.tempMin ? `${Math.floor(city.tempMin)}°` : "N/A"}
                  </span>
                </TempMin>
              </TempInfo>
              <ByDateInfo>
                {forecastData?.list?.map((item: ForecastItem, idx: number) => {
                  <DateInfo>
                    <Date></Date>
                    <DateWeatherIcon></DateWeatherIcon>
                    <Temp></Temp>
                  </DateInfo>;
                })}
              </ByDateInfo>
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
