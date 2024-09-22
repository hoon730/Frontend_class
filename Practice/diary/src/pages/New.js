import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import styled from "styled-components";
import Editor from "../components/Editor";
import { DispatchDataContext } from "../App";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 600px;
  height: 100vh;
  background: #fff;
`;

const New = () => {
  const { onCreate } = useContext(DispatchDataContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    const { createDate, content, emotionId } = data;
    onCreate(createDate, content, emotionId);
    navigate("/");
  };

  return (
    <Wrapper>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        date={"새 일기 쓰기"}
        rightChild={<Button text={"Home"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default New;
