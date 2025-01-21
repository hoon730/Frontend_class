import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  getWeatherByCurrentLocation,
  getCoordinates,
  getForecastData,
} from "../api";
import { cityState, searchedCityState, forecastDataState } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  fahrenheitToCelsius,
  getFormattedDate,
  getFormattedDay,
  getWeatherIconPath,
  transInfo,
  weatherIcons,
} from "../utils";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa";

const Container = styled.div``;

const Inner = styled.div``;

const Top = styled.div`
  margin-bottom: 50px;

  & > span:first-child {
    display: block;
    color: ${(props) => props.theme.subColor};
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 50px;
    letter-spacing: 1px;
    font-size: 2.5rem;
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
    font-size: 1.5rem;
    letter-spacing: 0.5px;
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
  color: #fff;
  padding: 30px 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.6);
  margin-bottom: 45px;
`;

const Desc = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
`;

const InputBox = styled.div`
  display: flex;
  margin-bottom: 40px;
  input {
    background: #fff;
    border: none;
  }
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 8px 0 8px 30px;
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
  background: #fff;

  svg {
    color: #111;
    font-size: 24px;
  }
`;

const SubmitInput = styled.input`
  display: none;
`;

const City = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;

  svg {
    font-size: 16px;
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  > div {
    width: 50%;
    display: flex;
  }

  margin-bottom: 40px;
`;
const Left = styled.div`
  align-items: center;
`;

const Right = styled.div`
  flex-direction: column;
  align-items: flex-end;
`;

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  font-size: 1.7rem;
  border-radius: 50%;
  margin-bottom: 5px;
  background: linear-gradient(
    180deg,
    rgba(3, 0, 51, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(3, 123, 208, 1) 77%,
    rgba(0, 212, 255, 1) 100%
  );
  /* width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  } */
`;
const WeatherDesc = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;
const CurrentTemp = styled.div`
  font-size: 6rem;
  font-weight: bold;
`;

const TempInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
    gap: 5px;

    svg {
      font-size: 1rem;
    }
  }
`;

const TempMax = styled.div`
  svg {
    color: #fdc40a;
  }
`;
const TempMin = styled.div`
  svg {
    color: #004080;
  }
`;

const ByDateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;
const Date = styled.div`
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;
const DateWeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  font-size: 1.7rem;
  background: linear-gradient(
    180deg,
    rgba(3, 0, 51, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(3, 123, 208, 1) 77%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 50%;
`;
const Temp = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;

  > span:first-child {
    color: #fdc40a;
  }

  /* > span:last-child {
    color: #004080;
  } */
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
  gap: 45px;
  text-align: center;

  > span:first-child {
    background: #eee;
    border-radius: 50%;
    padding: 15px;
    svg {
      font-size: 4rem;
    }
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

  return (
    <Container>
      <Inner className="inner">
        <Top>
          <span>PLAN YOUR TRIP</span>
          <h3>
            <span>All</span> the useful information you need
          </h3>
          <span>Trip advice to get the most out of your holidays</span>
        </Top>
        <Bottom>
          <WeatherBox
            style={{
              background: `url(${city?.bgImg}) center/cover no-repeat`,
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
              <City>
                {city?.cityName || ""}
                <FaLocationArrow />
              </City>
              <WeatherInfo>
                <Left>
                  <CurrentTemp>
                    {city?.currentTemp
                      ? `${Math.floor(city.currentTemp)}°`
                      : ""}
                  </CurrentTemp>
                </Left>
                <Right>
                  <WeatherIcon>
                    {/* <img src={city?.weatherIconPath} alt={city?.desc} /> */}
                    {city?.img}
                  </WeatherIcon>
                  <WeatherDesc>{city?.desc}</WeatherDesc>
                  <TempInfo>
                    <TempMax>
                      <span>
                        <ImArrowUp />
                      </span>
                      <span>
                        {city?.tempMax ? `${Math.floor(city.tempMax)}°` : ""}
                      </span>
                    </TempMax>
                    <TempMin>
                      <span>
                        <ImArrowDown />
                      </span>
                      <span>
                        {city?.tempMin ? `${Math.floor(city.tempMin)}°` : ""}
                      </span>
                    </TempMin>
                  </TempInfo>
                </Right>
              </WeatherInfo>
              <ByDateInfo>
                {forecastData?.list?.map((item: ForecastItem, idx: number) =>
                  idx % 8 === 0 ? (
                    <DateInfo key={idx}>
                      <Date>{getFormattedDay(item.dt)}</Date>
                      <DateWeatherIcon>
                        {/* <img
                          src={getWeatherIconPath(item.weather[0].icon)}
                          alt={`${item.dt}_weather`}
                        /> */}
                        {
                          weatherIcons.find(
                            (icon) => icon.name === item.weather[0].main
                          )?.icon
                        }
                      </DateWeatherIcon>
                      <Temp>
                        <span>
                          {fahrenheitToCelsius(item.main.temp_max) + "°"}
                        </span>
                        <span>
                          {fahrenheitToCelsius(item.main.temp_min) + "°"}
                        </span>
                      </Temp>
                    </DateInfo>
                  ) : null
                )}
              </ByDateInfo>
            </Desc>
          </WeatherBox>
          <Transportation>
            {transInfo.map((item) => (
              <Trans key={item.id}>
                <span>{item.icon}</span>
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
