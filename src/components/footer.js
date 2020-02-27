import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  background: #000000;
  color: #ffffff;
`;

const FooterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  max-width: ${({ theme }) => theme.maxContentWidth};
  padding: 1em;
`;

export default () => (
  <Footer>
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()}
        {', '}
        <span style={{ whiteSpace: 'nowrap' }}>
          Built with{' '}
          <OutboundLink
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </OutboundLink>
        </span>{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          and{' '}
          <OutboundLink
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </OutboundLink>
        </span>
      </p>
    </FooterContainer>
  </Footer>
);
