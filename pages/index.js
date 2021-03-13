import Head from 'next/head';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Zegray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
      </main>
    </div>
  );
}
