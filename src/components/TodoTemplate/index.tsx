import React from "react";
import styled from "styled-components";

import TodoHeader from "../TodoHeader";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { TodosContextProvider } from "../../contexts/TodoContext";

// type Todo = {
//   id: number;
//   text: string;
//   done: boolean;
// };
// type Todos = Array<Todo>;
// type Todos = Todo[];

const TodoTemplate = () => {
  // const initialTodo: Todos = [
  //   {
  //     id: 1,
  //     text: "make todolist with using typescript",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     text: "practice style-components",
  //     done: true,
  //   },
  //   {
  //     id: 3,
  //     text: "watching TV",
  //     done: false,
  //   },
  // ];

  // const [todos, setTodos] = useState<Todos>(initialTodo);

  // const nextId = useRef(0);

  // const addTodo: AddTodo = (newTodo) => {
  //   const todo = {
  //     id: nextId.current,
  //     text: newTodo,
  //     done: false,
  //   };
  //   setTodos(todos.concat(todo));
  //   nextId.current += 1;
  // };

  // const handleToggle: Toggle = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       return todo.id === id ? { ...todo, done: !todo.done } : todo;
  //     })
  //   );
  // };

  // const handleRemove: Remove = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  return (
    <TodosContextProvider>
      <TemplateContainer>
        <TodoHeader>Todo List</TodoHeader>
        <TodoForm />
        <TodoList />
        <AliceImg src="./img/imgAlice.PNG" />
      </TemplateContainer>
    </TodosContextProvider>
  );
};

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42vw;
  height: 720px;
  padding: 20px;
  background-color: ${(props) => props.theme.color.main};
`;

const AliceImg = styled.img`
  position: absolute;
  top: 423px;
  left: 410px;
  width: 30vw;
  height: 50vh;
  opacity: 0.2;
`;

export default TodoTemplate;
