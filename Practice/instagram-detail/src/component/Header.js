import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Gnb from "./Gnb";
import Barmenu from "./Barmenu";

const StlyedHeader = styled.header`
  width: 15%;
  height: 100vh;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #ccc;
`;

const StyledNav = styled.nav`
  
`;

const Header = () => {
  return (
    <StlyedHeader>
      <StyledNav>
        <Logo />
        <Gnb />
      </StyledNav>
      <Barmenu />
    </StlyedHeader>
  );
};

export default Header;
