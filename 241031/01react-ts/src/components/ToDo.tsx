import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

const ButtonGroup = styled.span`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];

// const target = 1;
// const front = food.slice(0, 1);
// const back = food.slice(target + 1);
// const final = [...food.slice(0, target), "gam", food.slice(target + 1)];

const ToDo = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const target = e.target as HTMLButtonElement
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldToDos: IToDo[]) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <ButtonGroup>
        <span>{text}</span>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO } onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING } onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE } onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </li>
  );
};

export default ToDo;
