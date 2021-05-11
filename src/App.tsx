import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
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
      <Head />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
