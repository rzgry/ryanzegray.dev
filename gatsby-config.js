const googleTrackingId = process.env.google_analytics_tracking_id;

module.exports = {
  siteMetadata: {
    title: 'Ryan Zegray',
    description:
      'Ryan Zegray Software Developer experienced with JavaScript, Python, Java, Node.js, React.js, HTML, CSS and SQL / NoSQL databases.',
    author: 'Ryan Zegray',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleTrackingId,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ryan Zegray',
        short_name: 'Ryan Zegray',
        start_url: '/',
        background_color: '#F2F2F2',
        theme_color: '#F2F2F2',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
