import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoContext";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

// const mockData = [
//   "Typescript 복습하기",
//   "Next.js 예습하기",
//   "Node.js 공부하기",
// ];

const App = () => {
  // const [showToDoInput, setShowToDoInput] = useState(false);
  // const [toDoList, setToDoList] = useState(mockData);
  // const [toDo, setToDo] = useState("");

  // const onAdd = (toDo: string) => {
  //   if (toDo === "") return;

  //   setToDoList([toDo, ...toDoList]);
  //   setToDo("");
  // };

  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item !== todo));
  // };
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer/>
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
