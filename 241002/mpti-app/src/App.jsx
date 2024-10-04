import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "SimKyungha";
    src: url("/fonts/SimKyungha.ttf") format("truetype");
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "SimKyungha";
    background: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67791550-d45a-4d6c-b154-5aaf143a98e8/dfoa59m-64ba4ae4-efac-42ec-9ca4-e9ceaf013e57.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3NzkxNTUwLWQ0NWEtNGQ2Yy1iMTU0LTVhYWYxNDNhOThlOFwvZGZvYTU5bS02NGJhNGFlNC1lZmFjLTQyZWMtOWNhNC1lOWNlYWYwMTNlNTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JvRJs1odgs8J7g5GvZf5-lCnj1XpqtMprJr6CrkkIM0") top/contain no-repeat;

  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// *bootstarp
// npm install react-bootstrap bootstrap

// MBTI 성향
// 1) E <-> I : 질문 홀수(3개)
// 2) S <-> N : 질문 홀수(3개)
// 3) T <-> F : 질문 홀수(3개)
// 4) J <-> P : 질문 홀수(3개)

// 우리에게 필요한 페이지가 무엇인가?
// Home => 최초에 MBTI 성향을 체크하겠다 라는 선택!
// Question => 사용자에게 질문 // 답을 회수
// Rusul => 사용자의 질문을 기반으로 MBTI 성향을 확인 후 결과값을 도출해 줄수 있는 페이지!

// *Page Routing
// - 페이지 구조를 설계 할 수 있는 컴포넌트
// - 컴포넌트 > Outlet > 자식요소 컴포넌트 생성 및 활용
// - 동적파라미터 값을 활용해서 page 분기(*나눔)
// - App.jsx > 모든 자식컴포넌트들의 최상위 부모 컴포넌트 역할
// - createBrowserRouter : layout tree
// - RouterProvider : props 모든 하위 요소 컴포넌트

// *외부소스(자료)를 활용해서 무언가의 스타일 적용 || 값을 적용하고자 할 때 (*img / video) =>

// 1) src 폴더 해당 값을 가져오는 방법
// > import를 통해서 값을 변수로 찾아서 사용!!

// 2) public폴더 해당 값을 가져오는 방법
// > 절대위치 좌표를 기준으로 문자열 형태의 주소값을 사용!!

// 최초 MBTI 시작하는 단계 => 0개
// + 1

// 카카오톡 공유하기

// 카카오 AdFit 광고설정

// 또다른 Deploy방법
// - Netify (*Deploy 사이트)
// > git-hub 친밀함 (*push)
// - Firebase (*Authentication // Storage // Database // Depoly)
// -cafe24 // 도메인 > 사이트 구축
// dothome & filezilla (*매우 번거로움)

// 네이버 포털사이트 SEO 설정

// https://app.netlify.com/

// 지난주 금요일 MBTI 프로젝트

// > git init
// > git-hub 저장소 > respository 생성 (*catmbti)
// > git remote add origin repository 주소 입력
// > git add .
// > git commit -m "first commit"
// > git push origin master

