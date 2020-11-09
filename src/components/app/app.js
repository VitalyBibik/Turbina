import styles from './app.css';
import HeaderMusic from '../header-music/header-music';
import Root from '../root/root';
import React from 'react';
import Footer from '../footer';
import config from '../../config';

function App() {
  return (
    <div className={styles['app']}>
      <HeaderMusic />
      <div className={styles['page']}>
        <Root />
      </div>
      <Footer />
    </div>
  );
}

export default App;
