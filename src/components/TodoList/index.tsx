import React from "react";
import styled from "styled-components";

import TodoItem from "../TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  onToggle: Toggle;
  onRemove: Remove;
}

const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  return (
    <ListContainer>
      {todos.map((todo) => {
        return <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle} />;
      })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 90%;
  height: 100%;
  border: 2px solid #000;
`;

export default TodoList;
