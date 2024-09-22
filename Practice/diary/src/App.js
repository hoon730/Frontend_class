import React, { useState, useEffect, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

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
    createDate: new Date().getTime(),
    content: "오늘은 기분1",
    emotionId: 1,
  },
  {
    id: "mock2",
    createDate: new Date().getTime() - 1,
    content: "오늘은 기분2",
    emotionId: 2,
  },
  {
    id: "mock3",
    createDate: new Date().getTime() - 2,
    content: "오늘은 기분3",
    emotionId: 3,
  },
  {
    id: "mock4",
    createDate: new Date().getTime() - 3,
    content: "오늘은 기분4",
    emotionId: 4,
  },
  {
    id: "mock5",
    createDate: new Date().getTime() - 4,
    content: "오늘은 기분5",
    emotionId: 5,
  },
];

export const DiaryDataContext = React.createContext();
export const DispatchDataContext = React.createContext();

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsLoaded(true);
  }, []);

  const onCreate = (createDate, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef,
        createDate: new Date(createDate).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, createDate, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        createDate: new Date(createDate).getTime(),
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

  if (!isLoaded) {
    <div>데이터를 불러오는 중 입니다..</div>;
  } else {
    return (
      <DiaryDataContext.Provider value={data}>
        <DispatchDataContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </DispatchDataContext.Provider>
      </DiaryDataContext.Provider>
    );
  }
}

export default App;
