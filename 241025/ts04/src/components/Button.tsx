import React from "react";
import styled from "styled-components";

interface ContainerProps {
  color: string;
}

const Contatnier = styled.button<ContainerProps>`
  border: none;
  border-radius: 4px;
  background: ${({ color }) => color};
  color: #fff;
  padding: 8px 15px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    background: ${({ color }) => color};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#FF5722", onClick }: Props) => {
  return (
    <Contatnier color={color} onClick={onClick}>
      {label}
    </Contatnier>
  );
};

export default Button;
