import Typography from 'typography';
import Noriega from 'typography-theme-noriega';
import theme from './theme';

Noriega.overrideThemeStyles = () => ({
  body: {
    backgroundColor: theme.background,
  },
  p: {
    color: theme.secondaryText,
  },
  'h1,h2,h3,h4,h5,h6': {
    color: theme.primaryText,
  },
  a: {
    color: theme.link,
    textDecoration: 'none',
    boxShadow: `inset 0 -2px 0 0 ${theme.link}`,
    transition: 'box-shadow .20s',
  },
  'a:hover': {
    color: theme.background,
    boxShadow: `inset 0 -50px 0 0 ${theme.link}`,
  },
  ul: {
    marginLeft: 0,
  },
});

const typography = new Typography(Noriega);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
