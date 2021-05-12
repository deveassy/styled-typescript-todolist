import React, { Fragment } from "react";
import TodoTemplate from "./components/TodoTemplate";
import {
  // ThemeProvider,
  // DefaultTheme,
  createGlobalStyle,
} from "styled-components";

// const lightTheme: DefaultTheme = {
//   color: {
//     main: "red",
//     sub: "blue",
//   },
// };
// const darkTheme: DefaultTheme = {
//   color: {
//     main: "white",
//     sub: "black",
//   },
// };

function App() {
  return (
    // <ThemeProvider theme={lightTheme}>
    <Fragment>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoTemplate />
      </div>
    </Fragment>
    // </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #bbdfc8;
  }
`;

export default App;
