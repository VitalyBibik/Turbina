import styles from './app.module.css';
import HeaderMusic from '../header-music/header-music';
import Root from '../root/root';
import React from 'react';
import Footer from '../footer';
import { config } from '../../config';

function App() {
  return (
    <div className={styles['app']}>
      <HeaderMusic />
      <div className={styles['page']}>
        <Root />
      </div>
      <Footer config={config} />
    </div>
  );
}

export default App;
