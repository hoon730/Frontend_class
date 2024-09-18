import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./App";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: orange;
  color: #fff;
`;

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const handleOnChange = () => {
    onUpdate(id);
  };

  const handleOnClick = () => {
    onDelete(id);
  };

  return (
    <Container>
      <input type="checkbox" checked={isDone} onChange={handleOnChange}></input>
      <div>{content}</div>
      <div>{new Date(date).toLocaleDateString()}</div>
      <Button onClick={handleOnClick}>삭제</Button>
    </Container>
  );
};

export default TodoItem;
