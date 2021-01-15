const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo Speaking Pro`,
    description: `Practice speaking English using advanced English expressions, idioms, slang, and grammar.`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      },
    },
  ],
}
