import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import styles from './lesson-list.module.css';

const LessonListPage = ({ data }) => {
  const categories = data.categories.nodes;
  const lessons = data.lessons.nodes.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
  });

  return (
    <React.Fragment>
      <SEO 
        title="All Convo Speaking Pro Lessons"
        description="A list of all the conversation lessons on Convo Speaking Pro"
        location="https://www.convospeakingpro.com/lessonlist"
      />
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
                    } else { return null }
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