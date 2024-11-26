import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import LoadingScreen from "./components/LoadingScreen";
import CreateAccount from "./routes/CreateAccount";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
${reset}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

body {
    background: #000;
    color: #fff;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    await setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;

// Vite: 빌드 도구!!
// - react를 활용해서 app 번들링!!!
// Bundle => 무언가를 하나로 묶는 작업

// 3. 무엇을 왜 Bundle?
// - 2015년부터 개발자들의 입에 오르내리기 시작!!!
// - 2009년 // 아이폰3 > 트위터
// - 페이스북 2012 ~ 2014년

// 3. 무엇을 왜 Bundle?
// - 2015년부터 개발자들의 입에 오르내리기 시작!!!
// - 2009년 // 아이폰3 > 트위터
// 페이스북 2012 ~ 2014년
// - JS역할 => 웹 & 앱 페이지의 기능 다양 => 구현 JS훨씬 더 많이 사용성
// - html.css + JS(*500줄) => 1000줄 ~ 2000줄
// - 1개의 파일 > 데이터 양 삽입 > 버그 취약 // 충돌 // 유지 보수 어려움

// JS => Ecma 기관
// Module => import & Export
// API : 로그인 정보 // index //JS

// - 1개의 앱 => 모듈 50개 // 30개
// - 웹브라우저가 파일 파싱 > executin 로딩시간

// - JS 30개 => 물리적으로 1개의 JS 압축 => 로딩
// - 번들러 => JS 번들링
// - webpack=> 번들러 1세대 // 부족한점
// - 번들링을 해야하는 모든 JS 다 읽음 100
// - 1개의 JS 변화 // 100

// 시간이 가면 갈수록 => mz 영상 멀티미디어 소스
// > 앱이 갖춰야하는 기능 갈수록 다양 & 화려해 // 고사양

// - meta // facebook => react.js

// - 차세대 번들러 esbuild
// HMR(Hot Module Replacement)방식을 재택 => webpack 70배나 속도가 빠른 번들러

// - 안정성 문제 => 잦은 버그 // 반복되는 번들링 작업 => 오류사항

// -HMR(Hot Module Replacement)방식을 채택 + 안전성 개선 => Vite(프랑스어 => 빠르다) => 번들링 + 컴파일링 + 배포 관여 => 빌드도구

// *컴파일 => scss // Live sass Compiler =번역하다!!

// *웹 => html, css, js

// *css => scss //
// *js => ts

// 컴파일 언어 : C, C++, Java
// - 컴파일 언어들은 컴파일링을 하기 위해서 우선, 최초에 해당 프로그래밍 언어 모든 문법을 스캐닝 // 초기 로딩 시간이 김
// - 오류 // 버그

// 인터프리터 언어 : Javascript
// - 자바스크립트 활용해서 1문장 작성 => 컴파일링의 시간 불필요

// 프론트앤드 개발 : react + ts
// 프로그래밍 언어 방식 2가지 부류
// 컴파일링
// 컴파일 언어

// npm i styeld-components
// npm i @types/styled-components-d

// 숫자.문자.객체.배열.함수 등
// 단순히 앱을 개발하는 단계에서만
// 실제 앱을 배포한 이후에도 필요한 패키지

// 원래. 원칙적으로 회원가입 // 관리 기능 Backend
// > cookie

// data통신

// 1. client // server
// 2. get // post
// 3. cookie : 향후 개인정보 // 서핑 // 히스토리
// > 형태 : 값x
// > 회원가입 // 아이디 & 패스워드

// Protected Router

// fire
