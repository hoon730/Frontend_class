import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DispatchDataContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 600px;
  height: 100vh;
  background: #fff;
`;

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onDelete } = useContext(DispatchDataContext);

  const goBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(id);
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        date={"일기 수정하기"}
        rightChild={
          <Button text={"삭제하기"} type={"positive"} onClick={handleDelete} />
        }
      />
    </Wrapper>
  );
};

export default Edit;
