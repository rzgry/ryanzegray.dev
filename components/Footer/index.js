import { socialLinks } from '../Social';

// remove codesandbox from footer
const contactLinks = socialLinks.filter((link) => link.text !== 'CodeSandbox');

const Footer = () => (
  <footer className="mt-0 md:mt-20 w-full">
    <div className="m-auto max-w-screen-lg p-4">
      <p className="text-center">
        Get in touch:{' '}
        {contactLinks.map(({ href, text, ...rest }) => (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
            <a href={href} {...rest}>
              {text}
            </a>{' '}
          </>
        ))}
        <br />
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

export default Footer;
