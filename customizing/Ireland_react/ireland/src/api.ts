import { getLanguageByCountry } from "./utils";

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getForecastData = async (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&lang=ru`;
  let response = await fetch(url);
  let data = await response.json();
  const {
    sys: { country },
  } = data;
  // const formattedLanguage = getLanguageByCountry(country);
  // url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&lang=${formattedLanguage}`;
  // console.log(url);
  // response = await fetch(url);
  // data = await response.json();

  console.log(data);

  return data;

  // const weather = data.weather[0]?.main;
  // getWeatherIcon(weather);
};

export const getCoordinates = async (city: string) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data && data.length > 0) {
    const cityInfo = {
      name: data[0]?.name,
      lat: data[0]?.lat,
      lon: data[0]?.lon,
    };
    return { lat: cityInfo.lat, lon: cityInfo.lon };
  } else {
    return { lat: null, lon: null };
  }
};
