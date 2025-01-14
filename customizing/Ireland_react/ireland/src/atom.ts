import { atom } from "recoil";

interface WeatherData {
  name: string;
  weather: Array<{ main: string }>;
}

interface CityInfo {
  name: string;
  lat: number | null;
  lon: number | null;
}

export const cityState = atom<WeatherData | null>({
  key: "cityState",
  default: null,
});

export const searchedCityState = atom<CityInfo | null>({
  key: "searchedCityState",
  default: null,
});

export const forecastDataState = atom<any>({
  key: "forecastDataState",
  default: null,
});
