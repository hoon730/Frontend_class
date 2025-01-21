import {
  fahrenheitToCelsius,
  getWeatherIconPath,
  weatherDescKo,
  weatherIcons,
} from "./utils";

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getForecastData = async (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ko&appid=${WEATHER_KEY}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  const cityName = data.name;
  // const langId = data.weather[0].id as keyof typeof weatherDescKo;
  const weather = data.weather[0].main;
  const weatherImg = weatherIcons.find((icon) => icon.name === weather);
  const weatherIcon = data.weather[0].icon;
  const weatherIconPath = getWeatherIconPath(weatherIcon);
  const weatherDesc = data.weather[0].description;
  // const weatherDesc = weatherDescKo[langId];
  const currentTemp = fahrenheitToCelsius(data.main.temp);
  const tempMin = fahrenheitToCelsius(data.main.temp_min);
  const tempMax = fahrenheitToCelsius(data.main.temp_max);
  const weatherImgPath = weatherIcons.find((item) => item.name === weather);

  const weatherInfo = {
    bgImg: weatherImgPath?.path,
    cityName,
    weatherIconPath,
    img: weatherImg?.icon,
    desc: weatherDesc,
    currentTemp,
    tempMin,
    tempMax,
  };

  // console.log(weatherInfo);

  return weatherInfo;
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
