import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './category-card.module.css';

const CategoryCard = ({ category }) => {
  const { category_name } = category;
  const slug = category.slug.current;
  const image = category.image.asset.fluid;

  return (
    <article className={styles.card}>
      <Link to={`/${slug}`}>
        <Img 
          fluid={image}
          alt={`Image representing the category ${category}`}
          className={styles.image}
        />
        <h5 className={styles.numberOfLessons}><span className={styles.border}>20 Conversations</span></h5>
        <h2 className={styles.title}>
          {category_name}
        </h2>
      </Link>
    </article>
  );
};

export default CategoryCard;