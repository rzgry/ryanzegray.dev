const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-dark': '#222527',
        'secondary-dark': '#515151',
        'primary-light': '#fcfcfc',
        'secondary-light': '#f5f5f5',
        'primary-accent': '#0dab76',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
