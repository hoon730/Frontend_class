import React, { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List 🎈</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;

// *검색창에 값을 입력!!!
// > 변수안에 값이 담겨져야 함

// * 목업데이터하고 비교!!!
// > 목업데이터 자료구조(*형태) = 배열 > 객체

// *일치가 되어지는 값 => TodoList > Item 출력!!!

// *배열 > 메서드들 중에서 특정값에 일치하는지 혹은 포함하는지 여부 체크할 수 있는 메서드!!!

// filter > include
