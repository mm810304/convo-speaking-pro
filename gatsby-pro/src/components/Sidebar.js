import React from 'react';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import cx from 'classnames';

import { linkData } from '../constants/Links';

import styles from './sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={cx(
      styles.sidebar,
      {
        [styles.showSidebar] : isOpen
      }
    )}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={toggleSidebar}
        aria-label="Close Menu"
      >
        <FaTimes className={styles.closeButton}/>
      </button>
      <div className={styles.linkContainer}>
        <ul className={styles.list}>
          {linkData.map((link) => (
            <li key={link.id} onClick={toggleSidebar}>
              <Link to={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;