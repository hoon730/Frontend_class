import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./Home";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark((current) => !current);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Button onClick={toggleDark}>
          {isDark ? "라이트모드" : "다크모드"}
        </Button>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

// 프로그래밍 언어 구현

// > 1가지의 언어를 명확하게 구현
// > 다른 프로그래밍 언어를 구현 & 학습 => 속도가 빠를 수 밖에 없음!!

// 1. 버튼
// 2. 버튼 이벤트
// 3. 기능 > 함수 > 콜백함수
// 4. DOM // ...

// 라이트모드 : 배경 // 폰트 => 흰색 타겟 요소
// 다크모드 : 배경 // 폰트 => 검정색 타겟 요소

// > 하나의 패키지로 위 속성 값을 세팅 객체

// background : #fff
// mainFontcolor: #000
// subFontcolor: #f00

// 모듈 export > import

// 버튼 // 이벤트 // useState
// > state // setState
