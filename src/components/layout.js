import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './footer';
import theme from '../utils/theme';

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 1.5rem 1.0875rem 1.45rem;
  width: 100%;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FlexLayout>
      <Main>{children}</Main>
      <Footer />
    </FlexLayout>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
