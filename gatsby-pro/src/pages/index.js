import React from "react";
import { graphql } from 'gatsby';

import Categories from '../components/Categories';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styles from './home.module.css';

const HomePage = ({ data }) => {
  const categories = data.categories.nodes.sort((a, b) => {
    return a.number > b.number ? 1 : -1;
  });

  const SEOImage = categories[0].image.asset.fluid;

  return (
    <React.Fragment>
      <SEO 
        title="Convo Speaking Pro"
        description="Practice speaking English with conversations using advanced English grammar, expressions, idioms, and phrases.  This is the best way to improve your English speaking fluency while practicing on your own."
        location="https://www.convospeakingpro.com"
        image={SEOImage.src}
      />
      <Layout>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Convo Speaking Pro</h1>
          <p className={styles.description}>Practice speaking English using advanced English grammar, expressions, idioms, and slang.</p>
        </div>
        <div>
          <Categories categories={categories} />
        </div>
        <p className={styles.extraResources}>If you want easier conversations that focus on the most common English questions, <a href="https://www.convospeaking.com" target="_blank" rel="noreferrer" className={styles.proLink}>Convo Speaking</a> has 100 free basic English conversation lessons.</p>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query CategoryQuery {
    categories: allSanityCategories {
      nodes {
        id
        category_name
        number
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default HomePage;