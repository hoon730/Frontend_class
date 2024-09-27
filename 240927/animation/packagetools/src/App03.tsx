import { useRef } from "react";
import { delay, motion, stagger } from "framer-motion";
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { borderRadius: "100px" },
};

const App03 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={1}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default App03;

// *null // undefined
// TS: null 타입 // undefined 타입
// > undefined : 값이 아직 정의되지 않은 상태
// - 1) 원래는 진짜로 값이 들어와야 하는데, 어떠한 경우에 의해서 아직 값이 들어오지 못한 경우
// - 2) 오타, 에러, 오류로 인해서 값을 받을 수 없는 부득의한 경우

// > null : 의도적으로 유효하지 않은 값을 정의한 상태
// - 일부러, 계획적으로 해당 값을 정의하지 않은 상태
// - (값이 없는) 값
