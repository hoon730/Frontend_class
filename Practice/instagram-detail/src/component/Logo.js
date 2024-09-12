import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  padding-bottom: 32px;
`;
const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">Instagram</a>
    </StyledLogo>
  );
};

export default Logo;
