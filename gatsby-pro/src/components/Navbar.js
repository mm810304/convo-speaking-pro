import React from 'react';
import { Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';

import { linkData } from '../constants/Links';

import styles from './navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navHeader}>
          <Link to="/">
            <h2 className={styles.logo}>
              Convo
            </h2>
          </Link>
          <button
            type="button"
            className={styles.btn}
            aria-label="Dropdown Menu"
            onClick={toggleSidebar}
          >
            <FiMenu />
          </button>
          <ul className={styles.pageLinks}>
            {linkData.map((link) => (
              <li key={link.id} className={styles.navLinkItem}>
                <Link to={link.url}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;