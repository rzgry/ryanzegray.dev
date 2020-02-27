import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Social from '../components/social';
import About from '../components/about';

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
  </Layout>
);

export default IndexPage;
