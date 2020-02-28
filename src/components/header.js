import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.headerBackground};

  ul {
    display: flex;
    li {
      margin-left: 2em;
    }
  }

  nav {
    padding: 1.5em;
    display: flex;
    max-width: ${({ theme }) => theme.maxContentWidth};
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 2em;
    /* No box shadow for main title/logo */
    color: ${({ theme }) => theme.highlight};
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    .header-title {
      display: none;
    }

    nav {
      justify-content: space-around;
    }
  }
`;

const HeaderOffset = styled.div`
  margin-top: 6em;
`;

export default () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <a className="header-title" href="/">
            RZ
          </a>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      {/* Offset for 'position: fixed' header */}
      <HeaderOffset />
    </>
  );
};
