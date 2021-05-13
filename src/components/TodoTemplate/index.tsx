import React, { useState, useRef } from "react";
import styled from "styled-components";

import TodoHeader from "../TodoHeader";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const TodoTemplate = () => {
  const initialTodo = [
    {
      id: 1,
      text: "make todolist with using typescript",
      done: false,
    },
    {
      id: 2,
      text: "practice style-components",
      done: true,
    },
    {
      id: 3,
      text: "watching TV",
      done: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodo);

  const nextId = useRef(0);

  const addTodo: AddTodo = (newTodo) => {
    const todo = {
      id: nextId.current,
      text: newTodo,
      done: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleToggle: Toggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  const handleRemove: Remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TemplateContainer>
      <TodoHeader>Todo List</TodoHeader>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TemplateContainer>
  );
};

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 720px;
  padding: 20px;
  border: 5px solid #000;
  background-color: #f0e5d8;
`;

export default TodoTemplate;
