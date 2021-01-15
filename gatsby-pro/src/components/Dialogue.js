import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import styles from './dialogue.module.css';

const Dialogue = ({ dialogue }) => {
  return (
    <section className={styles.container}>
      {ReactHtmlParser(dialogue)}
    </section>
  );
};

export default Dialogue;