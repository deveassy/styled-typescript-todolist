import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import { ThemeProvider, DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  color: {
    main: "red",
    sub: "blue",
  },
};
const darkTheme: DefaultTheme = {
  color: {
    main: "white",
    sub: "black",
  },
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <TodoTemplate />
    </ThemeProvider>
  );
}

export default App;
