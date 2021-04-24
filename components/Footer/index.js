import { socialLinks } from '../Social';
import styles from './footer.module.css';

// remove codesandbox from footer
const contactLinks = socialLinks.filter((link) => link.text !== 'CodeSandbox');

export default () => (
  <footer className={styles.footer}>
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
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{' '}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </span>{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          and{' '}
          <a
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
          .
        </span>
      </p>
    </div>
  </footer>
);
