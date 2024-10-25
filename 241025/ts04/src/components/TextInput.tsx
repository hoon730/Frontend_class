import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <StyledInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></StyledInput>
  );
};

export default TextInput;
