import React, { useState } from "react";
import styled from "styled-components";
import { useTodosDispatch } from "../../contexts/TodoContext";

// interface TodoFormProps {
//   addTodo: AddTodo;
// }

// const TodoForm = ({ addTodo }: TodoFormProps) => {
const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useTodosDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    // addTodo(newTodo);
    dispatch({
      type: "CREATE",
      text: newTodo,
    });
    setNewTodo("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      // addTodo(newTodo);
      dispatch({
        type: "CREATE",
        text: newTodo,
      });
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
  width: 40vw;
  height: 7vh;
  margin: 20px 0;
  /* border: 1px solid #000; */
`;

const TodoInsert = styled.input`
  width: 400px;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.2em;
  border: 0;
  border-radius: 100px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ffe268;
    font-style: italic;
  }
`;

const AddButton = styled.button`
  width: 80px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  background-color: #ffe268;
  font-size: 1em;
  font-weight: 700;
  color: #2f5d62;
`;

export default TodoForm;
