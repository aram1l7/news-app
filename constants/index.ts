import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "black",
  inputBg: "#ebe9e9",
  cardBg:"#e4e4e4",
};

export const darkTheme = {
  body: "black",
  text: "#FAFAFA",
  inputBg: "white",
  cardBg:"white"
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
