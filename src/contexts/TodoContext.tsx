import React, { createContext, Dispatch, useReducer, useContext } from "react";

const initialTodos: TodoState = [
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

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodoState = Todo[];
type TodoDispatch = Dispatch<Action>;

const TodosStateContext = createContext<TodoState | undefined>(undefined);
const TodosDispatchContext = createContext<TodoDispatch | undefined>(undefined);

function todosReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      const newTodo = state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
      return newTodo;
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`unhandled action type`);
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodoState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}
