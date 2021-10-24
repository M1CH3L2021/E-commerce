import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: saira;
  }

  :root {
    --white: #FFFFFF;
    --gray-bg: #DEDEDE;
    --gray-text: #737380;
    --gray-logo: #5D5D6D;
    --black: #09090A;
  }

  html, body {
    height: 100%;
    font-size: 62.5%;
    background: var(--gray-bg);
  }

  button {
    cursor: pointer;
  }
`