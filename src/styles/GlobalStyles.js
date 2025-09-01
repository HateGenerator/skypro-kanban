import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: #EAEEF6;
    color: #000000;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;