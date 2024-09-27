import { useRef, useEffect, useState } from "react";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
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
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

const App06 = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence>
          {showing ? (
            <Box
              variants={boxVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        <button onClick={toggleShowing}>Click</button>
      </Wrapper>
    </>
  );
};

export default App06;

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
