import React from 'react';

export const socialLinks = [
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

export default function index() {
  return (
    <span className="flex mt-8">
      &gt;{' '}
      <ul>
        {socialLinks.map(({ href, text, ...rest }) => (
          <li className="inline-block pl-4" key={href}>
            <a href={href} {...rest}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
}
