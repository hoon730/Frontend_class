import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  };
  return (
    <div className="TodoList">
      <h4>Todo List 🤠</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {/* {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))} */}
        {
          getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />    
          ))
        }
      </div>
    </div>
  );
};

export default TodoList;

// *검색창에 값을 입력!!!
// > 변수안에 값이 담겨져야 함

// * 목업데이터하고 비교!!!
// > 목업데이터 자료구조(*형태) = 배열 > 객체

// *일치가 되어지는 값 => TodoList > Item 출력!!!

// *배열 > 메서드들 중에서 특정값에 일치하는지 혹은 포함하는지 여부 체크할 수 있는 메서드!!!

// filter > include
