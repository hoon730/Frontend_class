import React, { useState, useContext, useMemo } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { TodoContext } from "./App";

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h3 {
    margin-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  width: 370px;
  height: 35px;
  margin-top: 10px;
  padding-left: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: #fff;
  &:focus {
    outline: none;
    border-bottom: 1px solid orange;
  }
`;

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analayzeTodo = useMemo(() => {
    const total = todo.length;
    const completed = todo.filter((it) => it.isDone).length;
    const inProcess = total - completed;
    return {
      total,
      completed,
      inProcess
    };
  }, [todo]);

  const { total, completed, inProcess} = analayzeTodo;

  return (
    <div>
      <TodoListWrapper>
        <h3>TodoList 🤠</h3>
        <span>Total : {total}</span>
        <span>Completed : {completed}</span>
        <span>In process : {inProcess}</span>
        <StyledInput
          placeholder="검색어 입력"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></StyledInput>
      </TodoListWrapper>
      <div>
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
