import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

const Social = () => (
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
);

export default Social;
