import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDataContext } from "../App";
import styled from "styled-components";
import Button from "./Button";
import { getEmotionImgById } from "../utils";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionBox = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailBox = styled.div``;
const DateItem = styled.div``;
const Content = styled.div``;

const DiaryItem = ({ id, createDate, content, emotionId }) => {
  const navigate = useNavigate();
  const data = useContext(DiaryDataContext);

  const goDiary = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Wrapper>
      <EmotionBox>
        <Img
          src={getEmotionImgById(emotionId)}
          alt={`emotion${emotionId}`}
          onClick={goDiary}
        />
      </EmotionBox>
      <DetailBox>
        <DateItem>
          {new Date(parseInt(createDate)).toLocaleDateString()}
        </DateItem>
        <Content>{content.slice(0, 25)}</Content>
      </DetailBox>
      <Button text={"수정하기"} onClick={goEdit} />
    </Wrapper>
  );
};

export default DiaryItem;
