import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ryan Zegray"
      keywords={[
        'ryan',
        'zegray',
        'ryan zegray',
        'software developer',
        'cloud software developer',
        'javascript',
        'node',
        'react',
      ]}
    />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;
