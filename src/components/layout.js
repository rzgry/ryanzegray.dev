import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ResetStyle from './global-styles/reset-styles';
import GlobalStyle from './global-styles/global';
import Header from './header';
import Footer from './footer';
import siteTheme from '../utils/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
    <ResetStyle />
    <GlobalStyle />
    <Header />
    <main style={{ minHeight: '100vh' }}>{children}</main>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
