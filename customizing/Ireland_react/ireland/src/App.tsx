import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import Header from "./components/Header";
import Weather from "./pages/Weather";
import { theme } from "./theme";

const GlobalsStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.fontColor};

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    input {
      border: none;
    }

    button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .inner {
    width: 1300px;
    height: 100vh;
    margin: 0 auto;
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalsStyle />
        <Wrapper>
          <Header />
          <Home />
          <Weather />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
