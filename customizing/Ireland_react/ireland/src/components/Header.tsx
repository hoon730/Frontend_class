import React from "react";
import styled from "styled-components";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
`;
const LogoBox = styled.div`
  display: flex;
`;
const Logo = styled.div`
  width: 130px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  text-align: center;
  font-size: 11px;
  letter-spacing: 0.3px;
`;
const Nav = styled.ul`
  display: flex;
  gap: 25px;

  li {
    display: flex;
    align-items: center;
    a {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <Logo>
          <img src="/img/logo.jpg" alt="logo" />
        </Logo>
        <Text>Ireland's official tourism website</Text>
      </LogoBox>
      <Nav>
        <li>
          <a href="#">Where to go</a>
        </li>
        <li>
          <a href="#">What to do</a>
        </li>
        <li>
          <a href="#">Plan your trip</a>
        </li>
        <li>
          <a href="#">
            <HiMiniMagnifyingGlass />
          </a>
        </li>
      </Nav>
    </Container>
  );
};

export default Header;
