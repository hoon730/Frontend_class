import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";
const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ul, li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const choice = {
  rock: {
    name: "rock",
    img: "https://cdn.pixabay.com/photo/2014/04/02/14/05/rock-306131_640.png",
  },
  scissors: {
    name: "scissors",
    img: "https://banner2.cleanpng.com/20181203/lzg/kisspng-vector-graphics-drawing-illustration-stock-photogr-5c05f5732af1c2.6492386615438943871759.jpg",
  },
  paper: {
    name: "paper",
    img: "https://img.freepik.com/premium-vector/hand-drawn-paper-cartoon-illustration_23-2151474661.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  console.log(userSelect);
  console.log(computerSelect);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}
export default App;

// 컴퓨터 VS 나 => 가위, 바위, 보 게임!!
// 컴퓨터 선택 (랜덤함수)
// 나 선택 (자의 선택 => 가위, 바위, 보 선택버튼)
// > 이벤트 // 콜백함수 => state
