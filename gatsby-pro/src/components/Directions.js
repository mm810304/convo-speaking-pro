import React, { useState } from 'react';
import { FaMinus, FaPlus} from 'react-icons/fa';
import cx from 'classnames';

import styles from './directions.module.css';

const Directions = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={styles.directions}>
      <header className={cx(
        styles.header, {
          [styles.headerBoxShadow] : !showInfo
        }
      )}>
        <h2>HOW TO USE</h2>
        <button
          type="button"
          className={styles.button}
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Show How to Use Directions"
        >
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && (
        <div className={styles.content}>
          <div className={styles.contentText}>
            <p className={styles.introDirections}>
              Select a character and press the play button.  You will say that character's part.  You can also listen to the whole conversation if you press the play button without selecting a character.
            </p>
            <h3 className={styles.recommended}>Recommended Way To Practice</h3>
            <ol className={styles.steps}>
              <li>Listen to the whole conversation and make sure you understand most of the grammar and vocabulary.</li>
              <li>Practice speaking each character's part.</li>
              <li>Keep practicing until you can say it smoothly.  Also, come back on another day and practice the same conversation.  This will help you review, remember, and get used to speaking fluent English.</li>
            </ol>
          </div>
        </div>
      )}
    </article>
  );
};

export default Directions;