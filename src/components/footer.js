import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const StyledFooter = styled.footer`
  text-align: right;
  background: ${props => props.theme.footerBackground};
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: -3rem;
    height: 3rem;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom right,
      transparent 49%,
      ${props => props.theme.footerBackground} 50%
    );
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 0px 1.0875rem 0px;
`;

const FooterText = styled.p`
  color: ${props => props.theme.background};
  a {
    box-shadow: inset 0 -2px 0 0 ${props => props.theme.secondaryText};
    color: ${props => props.theme.secondaryText};
  }
  a:hover {
    box-shadow: inset 0 -50px 0 0 ${props => props.theme.secondaryText};
    color: ${props => props.theme.background};
  }
  margin-top: 0.5rem;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <FooterText>
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
      </FooterText>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
