import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    overflow-y: hidden;
    }
  *, 
  *::after,
  *::before {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
