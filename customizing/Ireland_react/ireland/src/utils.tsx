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
    path: "https://media.citizen.co.za/wp-content/uploads/2024/08/Thunderstorms.jpg",
    icon: <IoIosThunderstorm />,
  },
  {
    name: "Drizzle",
    path: "https://images.unsplash.com/photo-1719038850147-2778f06ccae0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <BsCloudDrizzleFill />,
  },
  {
    name: "Rain",
    path: "https://images.unsplash.com/photo-1527571083252-f24c32e9d8c1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <IoRainy />,
  },
  {
    name: "Clouds",
    path: "https://knews.kathimerini.com.cy/assets/modules/wnp/articles/202304/13713/images/b_cloudy_skies_2.jpg",
    icon: <FaCloud />,
  },
  {
    name: "Snow",
    path: "https://images.unsplash.com/photo-1516715094483-75da7dee9758?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <TbSnowflake />,
  },
  {
    name: "Clear",
    path: "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg",
    icon: <IoSunny />,
  },
  {
    name: "Mist",
    path: "https://upload.wikimedia.org/wikipedia/en/3/33/Dense_Tule_fog_in_Bakersfield%2C_California.jpg",
    icon: <RiFoggyFill />,
  },
  {
    name: "Smoke",
    path: "https://i.natgeofe.com/n/0df55dc0-654e-4cb0-aaa2-f9035c6229e9/GettyImages-1334936959_2x1.jpg",
    icon: <WiSmoke />,
  },
  {
    name: "Haze",
    path: "https://images.unsplash.com/photo-1638708777796-7d282110defe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    icon: <BsCloudHaze2Fill />,
  },
  {
    name: "Dust",
    path: "https://bloximages.newyork1.vip.townnews.com/denvergazette.com/content/tncms/assets/v3/editorial/e/57/e5722be2-83e0-5c4b-95af-035a9aad79bf/64649c9f85c0b.image.jpg?crop=1113%2C835%2C71%2C0&resize=1200%2C900&order=crop%2Cresize",
    icon: <WiDust />,
  },
  {
    name: "Fog",
    path: "https://riverheadlocal.com/wp-content/uploads/2022/03/fog-road-headlightsadobe.jpeg",
    icon: <BsCloudFog2Fill />,
  },
  {
    name: "Sand",
    path: "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Dust-storm-12-7-2023.jpg",
    icon: <WiSandstorm />,
  },
  {
    name: "Ash",
    path: "https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2019/Discover/volcanic-ash-banner.jpg",
    icon: <FaVolcano />,
  },
  {
    name: "Squall",
    path: "https://wallpapercrafter.com/sizes/1366x768/123-clouds-cloudy-storm-sky-4k.jpg",
    icon: <BsCloudLightningRainFill />,
  },
  {
    name: "Tornado",
    path: "https://bpsfuelforthought.wordpress.com/wp-content/uploads/2015/06/supercell.jpg",
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
      // dayName = "일요일";
      dayName = "Sun";
      break;
    case 1:
      // dayName = "월요일";
      dayName = "Mon";
      break;
    case 2:
      // dayName = "화요일";
      dayName = "Tue";
      break;
    case 3:
      // dayName = "수요일";
      dayName = "Wen";
      break;
    case 4:
      // dayName = "목요일";
      dayName = "Thu";
      break;
    case 5:
      // dayName = "금요일";
      dayName = "Fri";
      break;
    case 6:
      // dayName = "토요일";
      dayName = "Sat";
      break;
    default:
      dayName = "알 수 없음";
  }

  return dayName;
};
