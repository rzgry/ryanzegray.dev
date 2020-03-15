import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;

  }
  body {
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }

  a {
    color: ${({ theme }) => theme.highlight};
    text-decoration: none;
    transition: box-shadow .20s;
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.highlight};
  }

  a:hover {
    color: ${({ theme }) => theme.primaryLight};
    box-shadow: inset 0 -50px 0 0 ${({ theme }) => theme.highlight};
  }

  h1,h2,h3 {
    font-weight: 700;
    color: ${({ theme }) => theme.primaryDark};
  }

  h4,h5,h6 {
    color: ${({ theme }) => theme.secondaryDark};
  } 

  p {
    color: ${({ theme }) => theme.secondaryDark};
    line-height: 2em;
  }
`;

export default GlobalStyles;
