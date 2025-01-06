import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 60px 0;
  background: url("/img/banner.jpg") center/cover no-repeat;
`;

const Left = styled.div`
  position: relative;
  width: 55%;
`;

const Tax = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  font-size: 32px;
`;

const Ireland = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 45%;
`;

const Slide = styled.div``;

const Home = () => {
  return (
    <Container>
      <Left>
        <Tax>Tax free</Tax>
        <Ireland>
          <img src="/img/irelandTxt.png" alt="txt" />
        </Ireland>
      </Left>
      <Right>
        <Slide></Slide>
      </Right>
    </Container>
  );
};

export default Home;
