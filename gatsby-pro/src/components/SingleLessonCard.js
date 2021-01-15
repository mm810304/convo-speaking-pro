import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './single-lesson-card.module.css';

const SingleLessonCard = ({ lesson, categorySlug }) => {
  return (
    <article className={styles.cardContainer}>
      <Link to={`/${categorySlug}/${lesson.slug.current}`}>
        <div className={styles.card}>
          <Img 
            fluid={lesson.lesson_image.asset.fluid}
            alt={lesson.title}
            className={styles.image}
          />
          <div className={styles.lessonInfo}>
            <h2 className={styles.lessonTitle}>
              {lesson.title}
            </h2>
            <p className={styles.lessonNumber}>
              <span className={styles.numberBorder}>
                {`Conversation #${lesson.lesson_number}`}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default SingleLessonCard;