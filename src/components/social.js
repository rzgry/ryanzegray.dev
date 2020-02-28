import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

const socialLinks = [
  {
    text: 'Email',
    href: 'mailto:ryan.zegray@gmail.com',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryan-zegray/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/rzgry',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'CodeSandbox',
    href: 'https://codesandbox.io/u/rzgry/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const StyledSocial = styled.p`
  display: flex;
  /* flex-direction: row-reverse; */
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding-left: 1em;
  }
`;

const Social = () => (
  <StyledSocial>
    &gt;
    <ul>
      {socialLinks.map(({ href, text, ...rest }) => (
        <li key={href}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <OutboundLink href={href} {...rest}>
            {text}
          </OutboundLink>
        </li>
      ))}
    </ul>
  </StyledSocial>
);

export default Social;
