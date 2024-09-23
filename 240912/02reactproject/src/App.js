import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { type } from "@testing-library/user-event/dist/type";

const Wrapper = styled.div`
  padding: 20px;
  background: var(--main-color);
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

// const mockData = [
//   {
//     id: "mock1",
//     date: new Date().getTime() - 1,
//     content: "mock1",
//     emotionId: 1,
//   },
//   {
//     id: "mock2",
//     date: new Date().getTime() - 2,
//     content: "mock2",
//     emotionId: 2,
//   },
//   {
//     id: "mock3",
//     date: new Date().getTime() - 3,
//     content: "mock3",
//     emotionId: 3,
//   },
// ];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length !== 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
    });
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다!</div>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
              {/* <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New</Link>
            <Link to={"/diary"}>Diary</Link>
            <Link to={"/edit"}>Edit</Link>
          </div> */}
            </Wrapper>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  }
};

export default App;

// 1) 구조
// Home 페이지 (*사용자 최초 방문)
// -New 페이지 (*일기를 작성할 수 있는 페이지)
// -Diary 페이지(*특정 날짜에 입력한 일기를 상세하게 조회해 볼 수 있는 페이지)
// Edit페이지 (*일기 조회 후 해당 일기를 수정해야 할 때, 접속가능한 페이지) > 수정 && 삭제

// 2) 폰트
// - 구글 폰트 > 폰트 가져와서 설치 !!

// 3) 이미지
// - 멀티미디어(*동영상 // 이미지) 소스 public
// - 동영상 => 무조건 public

// 4) 컴포넌트 기반
// - 중복 및 반복해서 사용될 요소들을 컴포넌트 만들어놓고 상황에 따라서 가져다가 사용할 수 있는 장점!!

// 5) Rect.js > JS 문법을 사용 > Module
// - 특정 기능을하는 함수를 1개 만들어 놓고, 필요할 때마다 해당 함수를 가져다가 사용할 수 있다는 의미!!

// 6) Page Routing 기능
// - 페이지

// 7) Link VS useNavigate

// - Link => a태그
// *동적페이지 => 인터렉티브한 페이지 구현
// (*JS) // => 사용자 이벤트 =>

// http://localhost:3000/diary/catergory?
// 동적경로 값 = URL 파라미터 (Parameter)
// 쿼리스트링 = QueryString

// 127.0.0.1 => IP 주소
// - 직관적 : DNS

// 최초에 일기를 작성할 때, 작성할 컴포넌트 페이지 이미 작성된 일기를 수정하고자 할 때, 작성(*편집)

// <button class="button"> </button>
// <button class="button"> </button>

// 감정아이콘 정의
// 어떤 감정 // 텍스트 // 이미지
// id: 1,
// name: "완전좋음"
// img: getEmotionImgById(1)

// *Editor 컴포넌트 생성 => 공통 컴포넌트
// - New 컴포넌트 페이지(*신규)
// - Edit 컴포넌트 페이짐(*기존)

// > 동일한 양식을 사용해서 일기 작성 || 업데이트

// *그래서 UI 기획 매우 중요!!
// > 컴포넌트 기반 작업
// 최초에 기획단계에서 설정해 놓지 않은 컴포넌트 페이지
// 만약, 중간 , 삽입 // 수정

// * 커스텀 Hooks 왜 만드는가?
// React.js > 내장 Hooks > 함수 !!!
// > 자주 반복해서 사용하는 기능(*템플릿화)
// > 컴포넌트 // 유틸리티 자바스크립트 함수
// > 독립적인 모듈로서 어떤 기능을 담당시키고자 할 때
// > 일반 자바스크립트 함수 > React Hooks

// *컴포넌트 렌더링
// 1) 부모컴포넌트가 랜더링
// 2) Props 상태 업데이트 // 추가
// 3) state 업데이트


// 1. 우리 팀이 개발하고자하는 전체 페이지의 구조 = 사이트맵
// 2. UI 작업 
// 3. 페이지 라우팅
// 4. 페이지별 KPI
// 5. PM 혹은 React.js => 필요한 데이터 어떤 형식 구성 (*MockData)
// 6. 공통적으로 필요한 컴포넌트
// - 헤더 // 버튼 // 텍스트에어리어 // 폼..

// 1.로컬스토리지 데이터 반영구 저장
// 2. 배포하는 방법

// 1. firebase 설치
// 2. firebase 초기화
// 3. public 폴더 > 호스팅 데이터 복.붙
// 4. firebase deplay

// > 웹브라우저가 인식x
// > react 세팅 로컬 컴퓨터 서버 활용
// > 어떤 로컬 컴퓨터든지 해당 파일을 볼 수 있도록 설정
// > 웹브라우저 : html, css, js만 인식!!

// npm run start : 리액트 서버를 켜는 명령어
// npm run build : 리액트 파일을 배포직전 설정단계 명령어


// Backend 부분

// 관계형 DB : 유튜브 A아이디 + 2024년 업로드한 영상 + 시청 + 댓글
// > 유튜브 1개월 계정 정지
// > 학습량 & 난이도 높은편 // 서버운영 부담
// MySQL

// 비관계형 DB : 상대적으로 다루기 쉬움 // 서버운영 부담 덜 // 복잡한 구조의 웹앱페이지 제작 x
// > 글로벌 기업 비관계형 DB 클라우드 서비스 시행
// > firebase : 그래도 AWS 보다는 보다 쉽게 접근
// - 배포x

// 고차원 구조(Scheme) 설계 및 세팅
// 다양하고 많은 멀티미디어 컨텐츠 다룰 수 있어야 함
// img // video 용량 부담 && Server 부재
// 사용자가 멀티미디어 컨텐츠를 업로드 // 삭제
// > 본인 업로드한 컨텐츠, 본인 삭제 권한


// TS + React.js
// TS : React.js : 터미널 npx create-react-app.

// TS : JS "Super Set" 언어
// > 보다 효율적인 방법 : Vite

// CSS // SCSS => Compiling (번역)