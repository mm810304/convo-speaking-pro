const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo Speaking Pro`,
    description: `Practice speaking English with conversations using advanced English grammar, expressions, idioms, and phrases.  This is the best way to improve your English speaking fluency while practicing on your own.`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_CONTAINER,
        includeInDevelopment: false
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Spectral\:400,700`,
          `Open Sans\:400,700`
        ],
        display: `swap`
      }
    }
  ],
}
