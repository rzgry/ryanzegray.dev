import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Zegray</title>
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
