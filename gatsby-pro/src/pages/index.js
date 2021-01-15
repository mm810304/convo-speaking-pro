import React from "react";
import { graphql } from 'gatsby';

import Categories from '../components/Categories';
import Layout from '../components/Layout';
import styles from './home.module.css';

const HomePage = ({ data }) => {
  const categories = data.categories.nodes;
  console.log(categories);
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Convo Speaking Pro</h1>
          <p className={styles.description}>Practice speaking English using advanced English grammar, expressions, idioms, and slang.</p>
        </div>
        <div>
          <Categories categories={categories} />
        </div>
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