import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Form>({});
  // const [toDos, setToDos] = useRecoilState(toDoState);

  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Container onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a thins to do",
        })}
        type="text"
        placeholder="Write a thing to do"
      />
      <input type="submit" value={"ADD"} />
    </Container>
  );
};

export default CreateToDo;
