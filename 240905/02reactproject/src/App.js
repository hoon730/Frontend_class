import "./App.css";
import React, { useRef, useReducer, useCallback, } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

export const TodoContext = React.createContext();

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createDate: new Date().getTime(),
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
      return state.filter((it) => it.id !== action.targetId );
    }
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback(
    (content) => {
      dispatch({
        type: "CREATE",
        newItem: {
          id: idRef.current,
          isDone: false,
          content,
          createDate: new Date().getTime(),
        },
      });
      idRef.current += 1;
    }, []); 

  const onUpdate = useCallback(

    (targetId) => {
      dispatch({
        type: "UPDATE",
        targetId,
      });
    }, []);

  const onDelete = useCallback(
    (targetId) => {
      dispatch({
        type: "DELETE",
        targetId,
      })
    }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{todo, onCreate, onUpdate, onDelete}}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;

// Todo List

// Header Component : 오늘이 며칠인지 알려주는 컴포넌트 역할

// Editor Component  : 사용자가 오늘 해야 할 일을 입력할 수 있는도록 도와주는 컴포넌트 역활

// List Component : Editor 컴포넌트를 통해서 사용자가 입력한 오늘 할 일이 출력되어지는 목록, 공간 역할

// 리액트 공부법

// 1. 각각의 개념 정의 확실하게!!

// 2. 큰 요소들 => 리액트 작동되는 원리 이해!!

// > 약 10여개 리액트 예제

// useState() : 컴포넌트를 만들면 거의 대부분의 활률로 무조건 state값을 관리해야하는 상황 발생
// - 사용자의 이벤트가 거의 대부분 발생
// - 가상돔 => 일반변수를 x // state관리!!

// useRef() : 특정 노드를 제어하고자 할 때, 혹은 컴포넌트 그 자체를 제어할 때

// useEffect() :컴포넌트가 어떤 단계 및 상황에 도착했을 때에 무언가를 실행시켜야할 때

// > Mockup Data 만드는 과정에서, 어떤 데이터가 필요한지 예측을 해보는 과정

// 제품 = 웹사이트 // 모바일앱
// > CRUD
// > Create
// > Read
// > Update
// > Delete
// >

// useRef()

// 1.VD => Node를 찾아와서, 제어하고자 할 때
// 2.컴포넌트 제어하고자 할 때
// > useRef(false)

// useState() VS useRef()
// > 컴포넌트 update가 될 요소 관리 => useState()
// > 컴포넌트 mount // rendering
// > state의 값은 => 컴포넌트가 렌더링이 되면 update가 필수적으로 일어남!!

// current: 렌더링의 영향을 받지 않음

// React Hooks
// - useState()
// - useRef()
// - useEffect()
// - useReducer()
// - useMemo()
// - useCallback()

// useMemo(callback, [의존성배열])

// 최적화!!!

// > 컴포넌트
// > 마운트 // 렌더링 // 언마운트
// > 메모이제이션
// > Memoizaion 기법
// > useMemo()
// > React.memo 속성!!
// > 고차 컴포넌트 // Higher Component
// > 기준 => state에 따라서 렌더링 여부
// > 횡단 관심사 = Cross Cutting Concerns

// 특정컴포넌트를 고차컴포넌트로 업그레이드 시킴으로인해서 부모컴포넌트 
// 아래에 있는 모든 자식 요소의 컴포넌트들이 고차 컴포넌트화 되어있는 해당 요소의 상태변화에 따라 같이 렌더링되지 않도록 조치를 취한 형태 =>
// 횡단 관심사로부터 벗어나게 했다!!표현

// > 최적화!!

// 1. 최적화는 반드시 웹앱 제작 및 기능구현이 마무리되는 단계에서 해야함
// 2. 모든 기능 최적화할 필요는 없음!!!
// 3. 최적화 => 컴포넌트 구조 > 정상 // 잘짜여져있는지

// *Context => 책 "목록" => 맥락

// > props처리 비효율적으로 진행 

// 미들웨어
// 하드웨어
// 소프트웨어

// 1. React.js는 왜 사용하는가?
// - Component 기반 프로제특 웹.앱 제작 // Module
// Virtual DOM 효율적인 업데이트 // DOM

// 2. JSX = Javascript XML 문법
// - props = property 약어 => 객체 (key + value)
// (컴포넌트 간 데이터 자료를 주고 받을 때, 함수 인자 & 매개변수)
// - 함수형 컴포넌트
// - props Drilling > context > useContext

// - state = 상태