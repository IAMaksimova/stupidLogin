import {createGlobalStyle} from "styled-components";


export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box; //вспомнить бокс сайзинг
  }
  body {
    margin: 0;
    font-family: Navigo, 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    color: white;
    font-weight: 200;
    

  }
  
`