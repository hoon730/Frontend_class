import { FaPlane } from "react-icons/fa6";
import { BiSolidBook } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";

import { IoIosThunderstorm } from "react-icons/io";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { IoRainy } from "react-icons/io5";
import { TbSnowflake } from "react-icons/tb";
import { IoSunny } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { RiFoggyFill } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { WiDust } from "react-icons/wi";
import { BsCloudFog2Fill } from "react-icons/bs";
import { WiSandstorm } from "react-icons/wi";
import { FaVolcano } from "react-icons/fa6";
import { BsCloudLightningRainFill } from "react-icons/bs";
import { FaTornado } from "react-icons/fa6";

export const transInfo = [
  {
    id: 1,
    icon: <FaPlane />,
    text: "HOW TO GET THERE",
  },
  {
    id: 2,
    icon: <BiSolidBook />,
    text: "BROCHURES",
  },
  {
    id: 3,
    icon: <FaCarRear />,
    text: "HOW TO GET AROUND",
  },
  {
    id: 4,
    icon: <IoInformationCircle />,
    text: "PRACTICAL INFORMATION",
  },
];

export const weatherIcons = [
  {
    name: "Thunderstorm",
    icon: <IoIosThunderstorm />,
  },
  {
    name: "Drizzle",
    icon: <BsCloudDrizzleFill />,
  },
  {
    name: "Rain",
    icon: <IoRainy />,
  },
  {
    name: "Snow",
    icon: <TbSnowflake />,
  },
  {
    name: "Clear ",
    icon: <IoSunny />,
  },
  {
    name: "Thunderstorm",
    icon: <IoIosThunderstorm />,
  },
  {
    name: "Drizzle",
    icon: <BsCloudDrizzleFill />,
  },
  {
    name: "Rain",
    icon: <IoRainy />,
  },
  {
    name: "Snow",
    icon: <TbSnowflake />,
  },
  {
    name: "Clear",
    icon: <IoSunny />,
  },
  {
    name: "Clouds",
    icon: <FaCloud />,
  },
  {
    name: "Mist",
    icon: <RiFoggyFill />,
  },
  {
    name: "Smoke",
    icon: <WiSmoke />,
  },
  {
    name: "Haze",
    icon: <BsCloudHaze2Fill />,
  },
  {
    name: "Dust",
    icon: <WiDust />,
  },
  {
    name: "Fog",
    icon: <BsCloudFog2Fill />,
  },
  {
    name: "Sand",
    icon: <WiSandstorm />,
  },
  {
    name: "Ash",
    icon: <FaVolcano />,
  },
  {
    name: "Squall",
    icon: <BsCloudLightningRainFill />,
  },
  {
    name: "Tornado",
    icon: <FaTornado />,
  },
];

export const weatherDescKo = {
  201: "가벼운 비를 동반한 천둥구름",
  200: "비를 동반한 천둥구름",
  202: "폭우를 동반한 천둥구름",
  210: "약한 천둥구름",
  211: "천둥구름",
  212: "강한 천둥구름",
  221: "불규칙적 천둥구름",
  230: "약한 연무를 동반한 천둥구름",
  231: "연무를 동반한 천둥구름",
  232: "강한 안개비를 동반한 천둥구름",
  300: "가벼운 안개비",
  301: "안개비",
  302: "강한 안개비",
  310: "가벼운 적은비",
  311: "적은비",
  312: "강한 적은비",
  313: "소나기와 안개비",
  314: "강한 소나기와 안개비",
  321: "소나기",
  500: "악한 비",
  501: "중간 비",
  502: "강한 비",
  503: "매우 강한 비",
  504: "극심한 비",
  511: "우박",
  520: "약한 소나기 비",
  521: "소나기 비",
  522: "강한 소나기 비",
  531: "불규칙적 소나기 비",
  600: "가벼운 눈",
  601: "눈",
  602: "강한 눈",
  611: "진눈깨비",
  612: "소나기 진눈깨비",
  615: "약한 비와 눈",
  616: "비와 눈",
  620: "약한 소나기 눈",
  621: "소나기 눈",
  622: "강한 소나기 눈",
  701: "박무",
  711: "연기",
  721: "연무",
  731: "모래 먼지",
  741: "안개",
  751: "모래",
  761: "먼지",
  762: "화산재",
  771: "돌풍",
  781: "토네이도",
  800: "구름 한 점 없는 맑은 하늘",
  801: "약간의 구름이 낀 하늘",
  802: "드문드문 구름이 낀 하늘",
  803: "구름이 거의 없는 하늘",
  804: "구름으로 뒤덮인 흐린 하늘",
  900: "토네이도",
  901: "태풍",
  902: "허리케인",
  903: "한랭",
  904: "고온",
  905: "바람부는",
  906: "우박",
  951: "바람이 거의 없는",
  952: "약한 바람",
  953: "부드러운 바람",
  954: "중간 세기 바람",
  955: "신선한 바람",
  956: "센 바람",
  957: "돌풍에 가까운 센 바람",
  958: "돌풍",
  959: "심각한 돌풍",
  960: "폭풍",
  961: "강한 폭풍",
  962: "허리케인",
};

export const fahrenheitToCelsius = (fahrenheit: number | undefined) => {
  if (!fahrenheit) return;
  const celsius = fahrenheit - 273.15;
  return Math.floor(celsius);
};

export const getWeatherIconPath = (data: string) => {
  const iconPath = `http://openweathermap.org/img/wn/${data}@2x.png`;
  return iconPath;
};

export const getFormattedDate = (time: number) => {
  const targetDate = new Date(time * 1000);
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const day = targetDate.getDay();

  let dayName;

  switch (day) {
    case 0:
      dayName = "일요일";
      break;
    case 1:
      dayName = "월요일";
      break;
    case 2:
      dayName = "화요일";
      break;
    case 3:
      dayName = "수요일";
      break;
    case 4:
      dayName = "목요일";
      break;
    case 5:
      dayName = "금요일";
      break;
    case 6:
      dayName = "토요일";
      break;
    default:
      dayName = "알 수 없음";
  }

  const paddedMonth = month < 10 ? `0${month}` : String(month);
  const paddedDate = date < 10 ? `0${date}` : String(date);

  return `${paddedMonth}월${paddedDate}일 ${dayName}`;
};

export const getFormattedDay = (time: number) => {
  const targetDate = new Date(time * 1000);
  const day = targetDate.getDay();

  let dayName;

  switch (day) {
    case 0:
      dayName = "일요일";
      break;
    case 1:
      dayName = "월요일";
      break;
    case 2:
      dayName = "화요일";
      break;
    case 3:
      dayName = "수요일";
      break;
    case 4:
      dayName = "목요일";
      break;
    case 5:
      dayName = "금요일";
      break;
    case 6:
      dayName = "토요일";
      break;
    default:
      dayName = "알 수 없음";
  }

  return dayName;
};
