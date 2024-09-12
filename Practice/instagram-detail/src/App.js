import "./App.css";
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Detail from "./component/Detail";
import Header from "./component/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Detail />} />
          </Routes>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
