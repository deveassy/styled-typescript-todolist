import React from "react";
import styled from "styled-components";

import TodoItem from "../TodoItem";
import { useTodoState } from "../../contexts/TodoContext";

// interface TodoListProps {
//   todos: Array<Todo>;
//   onToggle: Toggle;
//   onRemove: Remove;
// }

// const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
const TodoList = () => {
  const todos = useTodoState();
  return (
    <ListContainer>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 40vw;
  height: 67vh;
  /* border: 2px solid #fff; */
  border-radius: 7px;
`;

export default TodoList;
