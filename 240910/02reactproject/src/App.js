import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import MainPage from "./component/page/MainPage";

const MainTitleText = styled.h2`
font-size: 24px;
font-weight: bold;
text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

// 메인페이지 :http://localhost:3000/
// 글작성페이지 : http://localhost:3000/post-write

// http://localhost:3000/post/1
// http://localhost:3000/post/2
// http://localhost:3000/post/3
// http://localhost:3000/post/4

// react router
// styled components

// REST API
// -> 클라이언트 <-> 서버 통신 방법
// -> get // Post 등등
// -> 제품 (*페이지)을 제작한다고 할 때, 해당 페이지 안에 포함될 페이지들의 규칙성을 생성하고 제어.관리할 수 있도록 만들어 놓은 시스템

// 1. html, css , js를 활용해서 로컬컴퓨터 안에 있는 멀티미디어 소스를 불러 올 때에는 경로가 어디에 있던지 상관하지 않고 찾아올 수 있었음!!

// 2. react => 가상돔!!!
// Node.js기반에 실행되고 있는 자바스크립트 라이브러리!!