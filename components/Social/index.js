import React from 'react';
import styles from './social.module.css';

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
    <p className={styles.socialListContainer}>
      &gt;{' '}
      <ul>
        {socialLinks.map(({ href, text, ...rest }) => (
          <li className={styles.socialListItem} key={href}>
            <a href={href} {...rest}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </p>
  );
}
