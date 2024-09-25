import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme }) => theme.colorTheme.fontSecondary};
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colorTheme.fontPrimary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SearchButton>Button</SearchButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

// 1. styled - components에서 css요소를 찾아 와서 해당 요소를 활용해서 컴포넌트 내부에 props를 전달 받아서 스타일을 적용

// 2 사전 스타일 정의 + css요소 같이 사용!!!

// Theme = 테마 //
