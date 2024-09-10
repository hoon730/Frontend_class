import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 10px;
  font-siz: 16px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cusor: pointer;
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
};

export default Button;


// and 단락회로 평가 :

// 좌항값 && 우항값

// or 단락회로평가 :

// 좌항값 || 우항값