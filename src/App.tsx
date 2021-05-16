import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <HeaderStyle src="./img/templateSpring.jpeg" />
        <TodoTemplate />
      </Layout>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    /* @import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&family=Stick&display=swap'); */
    /* background-color: #bbdfc8; */
  }
  /* @font-face {
    font-family: 'Stick', sans-serif;;
    src: url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&family=Stick&display=swap');
  } */
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderStyle = styled.img`
  width: 47vw;
`;

export default App;
