import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  top: 0;
  bottom: inherit;
  left: 0;
  position: fixed;
  width: 100%;
  background: #000000;
  color: #ffffff;
`;

const HeaderContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 1em;
`;

const HeaderTitle = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 2em;
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin: 0.5em;
  }
`;

const HeaderOffset = styled.div`
  margin-top: 4em;
`;

export default () => (
  <>
    <Header>
      <HeaderContainer>
        <HeaderTitle href="#">Ryan Zegray</HeaderTitle>
        <HeaderLinks>
          <li>About</li>
          <li>Projects</li>
        </HeaderLinks>
      </HeaderContainer>
    </Header>
    <HeaderOffset />
  </>
);
