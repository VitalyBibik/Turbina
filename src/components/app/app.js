import styles from './app.module.css';
import HeaderMusic from '../header-music/header-music';
import Root from '../root/root';
import React from 'react';
import Footer from '../footer';
import { config } from '../../config';
import { tracks } from '../../tracks';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className={styles['app']}>
      <ParticlesBg type="random" bg={true} style={{ zIndex: 1 }} />
      <HeaderMusic config={config} tracks={tracks} />
      <div className={styles['page']}>
        <Root />
      </div>
      <Footer config={config} />
    </div>
  );
}

export default App;
