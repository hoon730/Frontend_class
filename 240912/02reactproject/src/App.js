import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const Wrapper = styled.div`
  padding: 20px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
  return state;
};

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
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
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
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
