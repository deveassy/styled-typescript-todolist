import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  todo: Todo;
  onToggle: Toggle;
  onRemove: Remove;
}
type TodoTextProps = {
  done: boolean;
};

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <ItemContainer>
      <DoneButton onClick={() => onToggle(todo.id)}>
        {todo.done ? <DoneImg /> : null}
      </DoneButton>
      <TodoText done={todo.done}>{todo.text}</TodoText>
      <DeleteButton onClick={() => onRemove(todo.id)}>X</DeleteButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 38vw;
  height: 5vh 0;
  margin: 5px;
  padding: 10px 20px;
  border: 1px dotted #5cb4d0;
  border-radius: 10px;
`;

const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
`;

const DoneImg = styled.img.attrs({ src: "./img/heart.png" })`
  width: 15px;
  height: 15px;
`;

const TodoText = styled.p<TodoTextProps>`
  font-size: 1.2em;
  font-weight: 700;
  color: #fff;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #1e6f5c;
  border: 0;
  border-radius: 50%;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
`;

export default TodoItem;
