import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const META_URL = 'https://ryanzegray.dev';
const META_OG_IMG_URL = 'https://ryanzegray.dev/images/og-image.png';
const META_TITLE = 'Ryan Zegray';
const META_DESCRIPTION = 'Ryan Zegray - Software Engineer from Toronto, Canada';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />

        <meta property="og:url" content={META_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={META_OG_IMG_URL}></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ryanzegray.dev" />
        <meta property="twitter:url" content={META_URL} />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={META_OG_IMG_URL} />
      </Head>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
