import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import { socialLinks } from './social';

// no need for codesandbox in contact links
const contactLinks = socialLinks.filter(link => link.text !== 'CodeSandbox');

const Footer = styled.footer`
  margin-top: 5em;
  width: 100%;
  padding-top: 2em;
  p {
    text-align: center;
  }
  div {
    margin: auto;
    flex-direction: row-reverse;
    max-width: ${({ theme }) => theme.maxContentWidth};
    padding: 1em;
  }
`;

export default () => (
  <Footer>
    <div>
      <p>
        Get in touch:{' '}
        {contactLinks.map(({ href, text, ...rest }) => (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
            <a href={href} {...rest}>
              {text}
            </a>{' '}
          </>
        ))}
      </p>
      <p>
        &copy; {new Date().getFullYear()}
        {', '}
        <span style={{ whiteSpace: 'nowrap' }}>
          Built with{' '}
          <OutboundLink
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </OutboundLink>
          ,{' '}
          <OutboundLink
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
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
          .
        </span>
      </p>
    </div>
  </Footer>
);
