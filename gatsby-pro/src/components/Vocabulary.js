import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FaMinus, FaPlus} from 'react-icons/fa';
import cx from 'classnames';

import styles from './vocabulary.module.css';

const Vocabulary = ({ vocabulary }) => {
  const [showVocab, setShowVocab] = useState(false);

  return (
    <section className={styles.vocabBox}>
      <header className={cx(
        styles.header, {
          [styles.headerBoxShadow] : !showVocab
        }
      )}>
        <h2>KEY VOCABULARY</h2>
        <button
          type="button"
          className={styles.button}
          aria-label="Show Key Vocabulary"
          onClick={() => setShowVocab(!showVocab)}
        >
          {showVocab ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showVocab && (
        <div className={styles.vocabContent}>
          {ReactHtmlParser(vocabulary)}
        </div>
      )}
    </section>
  );
};

export default Vocabulary;