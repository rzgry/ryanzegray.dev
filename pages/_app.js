import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Header from '../components/Header';

import '../styles/reset.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // polyfill 'smooth' behavior for element.scrollIntoView
  // Run in use effect as we don't want it running during server side rendering
  // because smoothscroll-polyfill uses 'window'
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
