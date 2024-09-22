import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  ${({ type }) =>
    type === "positive" ? `background: dodgerblue; color: #fff;` : `background: #ececec;`}
`;

const Button = ({ text, type, onClick }) => {
  return <StyledButton type={type} onClick={onClick}>{text || "Button"}</StyledButton>;
};

export default Button;
