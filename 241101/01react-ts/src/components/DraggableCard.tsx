import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Snapshot } from "recoil";

const Card = styled.div<DraggingProps>`
  /* background: ${(props) => props.theme.cardColor}; */
  background: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface DraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

interface DraggingProps {
  isDragging: boolean;
}

const DraggableCard = ({ toDoId, toDoText, index }: DraggableCardProps) => {
  return (
    <Draggable draggableId={toDoId + ""} index={index} key={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
