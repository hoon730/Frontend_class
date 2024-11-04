import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  background: ${(props) => props.theme.cardColor};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
`;

interface DraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: DraggableCardProps) => {
  return (
    <Draggable draggableId={toDo} index={index} key={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
