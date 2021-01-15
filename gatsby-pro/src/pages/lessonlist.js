import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import styles from './lesson-list.module.css';

const LessonListPage = ({ data }) => {
  const categories = data.categories.nodes;
  const lessons = data.lessons.nodes;
  console.log(data);
  return (
    <React.Fragment>
      <Layout>
        <div className={styles.wrapper}>
          {categories.map((category, index) => {
            return (
              <div key={index} className={styles.lessonsContainer}>
                <h2>{category.category_name}</h2>
                <ol className={styles.categoryList}>
                  {lessons.map((lesson) => {
                    if (lesson.category.category_name === category.category_name) {
                      return (
                        <li key={lesson.id} className={styles.listItem}>
                          <Link to={`/${lesson.category.slug.current}/${lesson.slug.current}`}>
                            {lesson.title}
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ol>
              </div>
            )
          })}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query AllLessonsQuery {
    lessons: allSanityLessons(sort: {fields: category___category_name}) {
    nodes {
      id
      title
      category {
        category_name
        slug {
          current
        }
      }
      slug {
        current
      }
    }
  }
  categories: allSanityCategories(sort: {fields: category_name}) {
    nodes {
      category_name
    }
  }
}`;

export default LessonListPage;