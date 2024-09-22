import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList, getEmotionImgById, getFormattedData } from "../utils";
import styled from "styled-components";
import EmotionBox from "./EmotionBox";
import Button from "./Button";

const DateBox = styled.div``;
const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  background: #eee;
`;
const EmotionGroup = styled.div``;
const EmotionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
const DiaryBox = styled.div`
  margin-bottom: 30px;
`;
const StyledTextArea = styled.textarea`
  width: 93%;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  background: #ececec;
  min-height: 200px;
  resize: none;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    createDate: getFormattedData(new Date()),
    content: "",
    emotionId: 1,
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        createDate: getFormattedData(new Date(parseInt(initData.createDate))),
      });
    }
  }, [initData]);

  const handleOnChangeDate = (e) => {
    setState({
      ...state,
      createDate: e.target.value,
    });
  };

  const handleOnChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  const handleOnChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <div>
      <DateBox>
        <h4>오늘의 날짜</h4>
        <StyledInput
          value={state.createDate}
          type="date"
          onChange={handleOnChangeDate}
        />
      </DateBox>
      <EmotionGroup>
        <h4>오늘의 감정</h4>
        <EmotionContainer>
          {emotionList.map((it) => (
            <EmotionBox
              key={it.id}
              {...it}
              onClick={handleOnChangeEmotion}
              isSelcted={state.emotionId === it.id}
            />
          ))}
        </EmotionContainer>
      </EmotionGroup>
      <DiaryBox>
        <h4>오늘의 일기</h4>
        <StyledTextArea onChange={handleOnChangeContent}></StyledTextArea>
      </DiaryBox>
      <ButtonBox>
        <Button text={"최소하기"} onclick={goBack} />
        <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
      </ButtonBox>
    </div>
  );
};

export default Editor;
