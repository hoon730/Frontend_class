import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
const Area = styled.div<AreaProps>`
  background: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();
  const onValid = ({ toDo }: FormProps) => {
    setValue("toDo", "");
  };

  const newTodo = {
    id: Date.now(),
    text: toDos,
  };

  setToDos((allBoards) => {
    return {
      ...allBoards,
      [boardId]: [newTodo, ...allBoards[boardId]]
    }
  })
  // const inputRef = useRef<HTMLInputElement>(null);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };

  return (
    <Wrapper>
      {/* <input ref={inputRef} type="text" placeholder="Please..." />
      <button onClick={onClick}>Click</button> */}
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task On ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Board;
