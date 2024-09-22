import React from "react";
import styled from "styled-components";
import { getEmotionImgById } from "../utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &.EmotionBox_off {
    background: #ececec;
  }
  &.EmotionBox_on_1 {
    background: #64c964;
    color: #fff;
  }
  &.EmotionBox_on_2 {
    background: #9dd772;
    color: #fff;
  }
  &.EmotionBox_on_3 {
    background: #fdce17;
    color: #fff;
  }
  &.EmotionBox_on_4 {
    background: #fd8446;
    color: #fff;
  }
  &.EmotionBox_on_5 {
    background: #fd565f;
    color: #fff;
  }
`;

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const EmotionBox = ({ id, name, img, onClick, isSelcted }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <Wrapper
      onClick={handleOnClick}
      className={isSelcted ? `EmotionBox_on_${id}` : "EmotionBox_off"}
    >
      <ImgBox>
        <Img src={img} alt={`emotion${id}`} />
      </ImgBox>
      <span>{name}</span>
    </Wrapper>
  );
};

export default EmotionBox;
