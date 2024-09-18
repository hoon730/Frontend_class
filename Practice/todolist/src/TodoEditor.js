import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./App";

const Wrapper = styled.div`
margin-bottom: 20px;
`;

const Styledh3 = styled.h3`
margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  &:focus {
    outline: none;
    border: 1px solid orange;
  }
`;

const StyledButton = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #444;
  color: #fff;
`;

const TodoEditor = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const { onCreate } = useContext(TodoContext);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <Wrapper>
      <Styledh3>New Assignment</Styledh3>
      <div className="input_box"></div>
      <StyledInput
        placeholder="할 일을 입력해주세요."
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={(e) => setContent(e.target.value)}
      ></StyledInput>
      <StyledButton onClick={onSubmit}>추가</StyledButton>
    </Wrapper>
  );
};

export default TodoEditor;
