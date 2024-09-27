import { useRef, useEffect } from "react";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;

  path {
    stroke: #fff;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0" },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1",
    transition: { duration: 5 },
  },
};

const App05 = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path
            variants={svg}
            initial="start"
            fill="transparent"
            d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
          />
        </Svg>
      </Wrapper>
    </>
  );
};

export default App05;

// *null // undefined
// TS: null 타입 // undefined 타입
// > undefined : 값이 아직 정의되지 않은 상태
// - 1) 원래는 진짜로 값이 들어와야 하는데, 어떠한 경우에 의해서 아직 값이 들어오지 못한 경우
// - 2) 오타, 에러, 오류로 인해서 값을 받을 수 없는 부득의한 경우

// > null : 의도적으로 유효하지 않은 값을 정의한 상태
// - 일부러, 계획적으로 해당 값을 정의하지 않은 상태
// - (값이 없는) 값

// Vanilla JS :
// Zoomin // Zoomout
// > window > event // scroll
// scrollY : 위로부터 스크롤이 얼만큼 내려왔는가에 대한 값!
// > z축으로 값으로 변형해서 사용

// Framer-motion : 컴포넌트 마운트 // 어떠한 모션이 발생 // 기본적으로 motionValue이 생성 !!!
// > x,y 기타 등등 모션관련 value

// > useMotionValue()
// > useTransform()
// > useScroll()
