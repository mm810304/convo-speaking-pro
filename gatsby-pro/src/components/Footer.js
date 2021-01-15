import React from 'react';
import { Link } from 'gatsby';

import { linkData } from '../constants/Links';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.mainText}>
          Have a Question or See a Mistake?
        </h3>
        <h3 className={styles.contact}>
          <a 
            href="mailto:support@convoenglish.co"
            className={styles.link}
          >
             - support@convoEnglish.co
          </a>
        </h3>
      </div>
      <div>
        <h3 className={styles.mainText}>
          Convo English LLC Copyright&copy; {new Date().getFullYear()}
        </h3>
      </div>
      <div>
        <h3 styles={styles.mainText}>
          <Link to={linkData[2].url} className={styles.link}>
            More Free English Lessons
          </Link>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;