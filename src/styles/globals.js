import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  input,
  button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html,
  body {
    font-size: 62.5%;
    background: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 740px) {
    body,
    html {
      font-size: 65%;
    }
  } 
  @media (min-width: 980px) {
    html,
    body {
      font-size: 75%;
    }
  }
  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
