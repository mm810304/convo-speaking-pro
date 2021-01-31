import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SingleLessonCard from '../components/SingleLessonCard';
import styles from './lessons.module.css';

const LessonsPage = ({ data, pageContext }) => {
  const lessons = data.lessons.nodes.sort((a, b) => a.lesson_number > b.lesson_number ? 1 : -1);

  const SEOImage = lessons[0].lesson_image.asset.fluid;

  return (
    <React.Fragment>
      <SEO 
        title={pageContext.categoryName}
        description={`Practice speaking English on your own with English conversations for the category '${pageContext.categoryName}'`}
        image={SEOImage.src}
        location={`https://www.convospeakingpro/${pageContext.categorySlug}`}
      />
      <Layout>
        <div className={styles.pageContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {pageContext.categoryName}
            </h1>
            <p className={styles.description}>
              Choose a lesson and starting speaking English!
            </p>
          </div>
          <div className={styles.cardWrapper}>
            {lessons.map((lesson) => (
              <SingleLessonCard 
                key={lesson.lesson_number}
                lesson={lesson}
                categorySlug={pageContext.categorySlug}
              />
            ))}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query($categoryName: String) {
    lessons: allSanityLessons(filter: {category: {category_name: {eq: $categoryName}}}) {
      nodes {
        id
        title
        lesson_number
        slug {
          current
        }
        lesson_image {
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

export default LessonsPage;