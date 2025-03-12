import React, { useState } from "react";
import styled from "styled-components";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Menu from "./menu";
const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 1000;
  background: #fff;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);
`;
const LogoBox = styled.div`
  display: flex;
`;
const Logo = styled.div`
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
  gap: 60px;

  li {
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 2px;
      background: #097a4d;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover::before {
      width: 100%;
      opacity: 1;
    }

    a {
      font-size: 18px;
      font-weight: bold;
      color: #23012f;
    }
  }
`;

const Header = () => {
  const navList = ["Where to go", "What to do", "Plan your trip"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <LogoBox>
          <Logo>
            <img src="/img/logo.jpg" alt="logo" />
          </Logo>
          <Text>Ireland's official tourism website</Text>
        </LogoBox>
        <Nav>
          {navList.map((li) => (
            <li
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <a href="#">{li}</a>
            </li>
          ))}
          <li>
            <a href="#">
              <HiMiniMagnifyingGlass />
            </a>
          </li>
        </Nav>
      </Container>
      {isMenuOpen && <Menu />}
    </>
  );
};

export default Header;
