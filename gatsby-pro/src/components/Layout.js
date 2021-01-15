import React, { useState } from 'react';

import 'normalize.css';
import '../styles/index.css';
import styles from './layout.module.css';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;



