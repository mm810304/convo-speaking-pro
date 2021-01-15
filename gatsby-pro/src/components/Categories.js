import React from 'react';

import CategoryCard from './CategoryCard';
import styles from './categories.module.css';

const Categories = ({ categories }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
};

export default Categories;