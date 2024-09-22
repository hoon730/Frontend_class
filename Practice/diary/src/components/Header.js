import React from "react";
import styled from "styled-components";

const Warpper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.div``;
const LeftChild = styled.div``;
const RightChild = styled.div``;

const Header = ({leftChild, date, rightChild}) => {
  return (
    <Warpper>
      <LeftChild>{leftChild}</LeftChild>
      <Title>{date}</Title>
      <RightChild>{rightChild}</RightChild>
    </Warpper>
  );
};

export default Header;
