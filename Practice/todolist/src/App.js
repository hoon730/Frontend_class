import "./App.css";
import React from "react";
import { useRef, useCallback, useReducer } from "react";
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { type } from "@testing-library/user-event/dist/type";

export const TodoContext = React.createContext();

const mockTodo = [
  {
    id: 1,
    content: "영화보기",
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: "노래듣기",
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 3,
    content: "운동하기",
    isDone: false,
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "create": {
      return [action.newItem, ...state];
    }
    case "update": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "delete": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const idRef = useRef(4);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "create",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        date: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "update",
      targetId,
    });
  });

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "delete",
      targetId,
    });
  });

  return (
    <div className="App">
      <TodoContext.Provider value={{ onCreate, onUpdate, onDelete, todo }}>
        <Header />
        <TodoEditor />
        <TodoList mockTodo={mockTodo} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
