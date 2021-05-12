import React, { useState } from "react";
import styled from "styled-components";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      addTodo(newTodo);
    }
    setNewTodo("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TodoInsert
        value={newTodo}
        type="text"
        placeholder="I need to"
        onChange={handleChange}
      />
      <AddButton type="submit" onKeyPress={handleKeyPress}>
        ADD
      </AddButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 70px;
  border: 1px solid #000;
`;

const TodoInsert = styled.input`
  width: 400px;
  padding: 10px;
  margin: 0 10px;
  font-size: 20px;
`;

const AddButton = styled.button`
  width: 80px;
  padding: 10px;
`;

export default TodoForm;
