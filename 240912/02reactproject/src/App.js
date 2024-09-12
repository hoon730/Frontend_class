import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/diary" element={<Diary />}/>
          <Route path="/edit" element={<Edit />}/>
        </Routes>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary"}>Diary</Link>
          <Link to={"/edit"}>Edit</Link>
        </div>
      </div>
  );
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
// - 동영상 => 무저건 public

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