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

const boxVariants = {};

const App04 = () => {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238)",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238)",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0)",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [x]);
  return (
    <>
      <GlobalStyles />
      <Wrapper style={{ background: gradient }}>
        <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
};

export default App04;

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
