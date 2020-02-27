import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Reset from './utility/reset-styles';
import Header from './header';
import Footer from './footer';
import siteTheme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
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
  }

  h1,h2,h3 {
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

const Layout = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
