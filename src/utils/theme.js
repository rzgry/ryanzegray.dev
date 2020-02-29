const theme = {
  primaryDark: 'rgb(34, 37, 39)',
  secondaryDark: 'rgb(81, 81, 81)',
  primaryLight: 'rgb(252, 252, 252)',
  secondaryLight: 'rgb(245, 245, 245)',
  highlight: '#0DAB76',
  headerBackground: 'rgb(252, 252, 252, 0.9)',
  maxContentWidth: '1100px',
};

// TODO: Better dark theme implementation & add a toggle
// eslint-disable-next-line
const darkTheme = {
  primaryDark: theme.primaryLight,
  secondaryDark: theme.secondaryLight,
  primaryLight: theme.primaryDark,
  secondaryLight: theme.secondaryDark,
  highlight: 'rgb(0, 184, 247)',
  headerBackground: 'rgb(34, 37, 39, 0.9)',
  maxContentWidth: '1100px',
};

export default theme;
