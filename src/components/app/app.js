import styles from './app.module.css';
import HeaderMusic from '../header-music/header-music';
import Root from '../root/root';
import React, { useMemo, useState } from 'react';
import Footer from '../footer';
import { config } from '../../config';
import { tracks } from '../../tracks';
import ParticlesBg from 'particles-bg';

function App() {
  const animationArray = [
    'color',
    'lines',
    'thick',
    'circle',
    'cobweb',
    'square',
    'tadpole',
    'fountain',
  ];
  const min = 0;
  const max = animationArray.length - 1;
  let nextAnimation =
    animationArray[Math.floor(min + Math.random() * (max + 1 - min))];

  return (
    <div className={styles['app']}>
      <ParticlesBg type={nextAnimation} bg={true} />

      <HeaderMusic config={config} tracks={tracks} />
      <div className={styles['page']}>
        <div className={styles['page__container']}>
          <Root />
        </div>
      </div>
      <Footer config={config} />
    </div>
  );
}

export default App;
