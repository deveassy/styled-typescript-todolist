import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  todo: Todo;
  onToggle: Toggle;
  onRemove: Remove;
}

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <ItemContainer>
      <DoneButton onClick={() => onToggle(todo.id)}>
        {todo.done ? <DoneImg src="./img/done.png" /> : null}
      </DoneButton>
      <TodoText>{todo.text}</TodoText>
      <DeleteButton onClick={() => onRemove(todo.id)}>X</DeleteButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65vh;
  margin: 10px;
  background-color: #fff;
`;

const DoneButton = styled.button`
  padding: 10px;
  background-color: blue;
`;

const DoneImg = styled.img`
  width: 5px;
  height: 5px;
`;

const TodoText = styled.div`
  color: red;
`;

const DeleteButton = styled.button`
  padding: 6px;
`;

export default TodoItem;
