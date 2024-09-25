import styled, { css } from "styled-components";
import "./App.css";

const baseShadow = css`
  box-shadow: ${({ color }) => `0 10px 6px ${color || "red"}`};
`;

const font = ({ color, size, family }) => `
  color: ${color || "red"};
  font-size: ${size || "1rem"};
  font-family: ${family || "serif"};  
`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
  ${font({ color: "green", size: "2rem" })}
`;

function App() {
  return (
    <div className="App">
      <Container color={"purple"}>Styled Components</Container>
    </div>
  );
}

export default App;

// 1. styled - components에서 css요소를 찾아 와서 해당 요소를 활용해서 컴포넌트 내부에 props를 전달 받아서 스타일을 적용

// 2 사전 스타일 정의 + css요소 같이 사용!!!

// Theme = 테마 //