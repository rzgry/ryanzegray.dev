import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Reset from './reset-styles';
import Header from './header';
import Footer from './footer';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif
  }
`;

const Layout = ({ children }) => (
  <div>
    <Reset />
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
