import "./App.css";
import React, { useReducer, useRef, useCallback, useState } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  const [state, setState] = useState([]);

  const newItem = [];

  /* example */
  const onCreate01 = useCallback(() => {
    setState((state) => [newItem, ...state]);
  }, []);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

// 1) useMemo
// 2) React.memo
// 3) useCallback

// *컴포넌트 생애주기
// - 마운트(mount) : 컴포넌트가 브라우저에 최초 출력되는 상황
// - 랜더링(redering) : 컴포넌트 내부에 있는 state 혹은 함수 등의 요소들이 update되는 상황
// - 리랜더링(Rerendering) : 컴포넌트가 관리하고 있는 state값이 복수(*2개 이상) 일 때에는 state값 1개가 update가 되는 순간 컴포넌트가 다시 랜더링

// - 언마운트(unmount) : 부모컴포넌트 내부에 있는 자식컴포넌트를 사용했다가 종료가 되는 시점

// * 최적화를 하는 이유가 무엇인가?

// - reat.js 태생적으로 모듈화된 다수의 컴포넌트들을 조합해서 하나의 앱을 완성할 수 밖에 없는 시스템이기 때문에 불필요하게 혹은 비효율적으로 컴포넌트의 리랜더링 혹은 컴포넌트 안에 state, 함수들의 리랜더링 혹은 컴포넌트 내부의 함수들의 불필요한 호출들이 빈번하게 발생할 수 밖에 없는 숙명!!

// -소소한 작은 규모의 프로젝트 앱의 경우는 사실 최적화가 그렇게 크게 필요x
// -프로젝트의 규모가 커지는 경우 => 외부 API 데이터를 빈번하게 혹은 복수로 가져와서 사용하는 경우, 트래픽 발생이 점점 높아지는 경우, 내부 컨텐츠 (*멀티미디어)의 용량이 고사양인 경우

// *최적화를 해야하는 타이밍 // 상황은 언제인가?
// - 컴포넌트가 언제 Rerendering이 발생하는가를 고민
// - 크게 3가지 밖에 없음
// 1) 컴포넌트 안에 있는 state값이 update가 되는 상황
// 2) props의 값이 변경(*수정)되거나 추가되는 상황
// 3) 부모컴포넌트에서 rendering이 발생되면, 자식컴포넌트에서 rendering이 발생

// *그렇다면, 최적화를 실행시킨는 3가지의 대표적인 방법
// 1) useMemo : 컴포넌트 내부에 있는 함수의 비효율적인 호출을 방지하고자 할 때
// - React.js Hooks 함수 중 하나
// 함수는 인자값을 받음 => 콜백 제어!!
// -useMemo(callback, 의존성배열) => 의존성배열 안에 담긴 값이 update(*변화)될 때에만 callback함수를 실행시켜주는 역할

// 2) React.memo : 부모컴포넌트의 rendering으로 인한 자식컴포넌트의 Rerendering을 방지하고자 할 때
// - 인자값은 반드시 컴포넌트만 받을 수 있음
// - 컴포넌트를 제어!!! => 원래는 부모컴포넌트가 rendering됨으로 인해서 자식컴포넌트가 운명적으로 Rerendering이 되어야 하나, 이 운명을 거슬러서 Rerendering이 안되도록 강화(*upgrade)시킴!!
// - Upgrade가 된 자식커포넌트를 "고차컴포넌트"화 되었다!! HOC Higher Order Component
// 프로그래밍 영역에서 프로그램 앱을 개발 => 공통컴포넌트 // 메인컴포넌트 다르게 분류!!
// -react 라이브러리 => React 객체를 찾아와서 컴포넌트 하단 export영역에서 컴포넌트 네임을 인자값으로 설정
// - React.memo(Header)

// - 메인기능역할 담당하는 메인 컴포넌트 세로(종단)로 배치// 여기저기에서 공통으로 사용하는 공통컴포넌트 가로(횡단)로 배치

// - 횡단 관심사 요소 = 공통 컴포넌트

// 3) 문제점
// - React.memo를 활용해서 부모컴포넌트의 rendering여부와 관계없이 자식컴포넌트의 Rerendering을 제어 !!! => 부모컴포넌트로부터 전달받는 props 2개가 존재!!! // 부모에게 전달 받지 않는 props가 1개가 존재

// -useCallback => 의존성배열을 정의해놓고, 해당 의존성배열안에 담긴 state값이 변할 때에만 내부에있는 콜백함수를 실행시킬 수 있음!!
// useCallback(callback, 의존성배열) => 의존성배열의 변경 여부에 따라서 callback 실행여부 판단
// => useCallback : 함수형 업데이트!!!
// => 의존성 배열이 존재하지 않는 경우에는 실제 함수가 실행될 때에만 rendering을 시킴
// => 딜레마 : 불필요한 Rerendering을 방지하고자 useCallback을 사용하고, 의존성 배열을 빈배열로 설정하는 경우, state의 최신값을 받아오지 못하는 에러도 발생할 수 있음!!
// 함수형 업데이트 형태로 state 최신값을 항상 받아올 수 있도록 해야함