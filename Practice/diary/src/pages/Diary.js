import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { getFormattedData } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 600px;
  height: 100vh;
  background: #fff;
`;

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Wrapper>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        date={`${getFormattedData(new Date())} 기록`}
        rightChild={<Button text={"수정하기"} onClick={goEdit} />}
      />
    </Wrapper>
  );
};

export default Diary;
