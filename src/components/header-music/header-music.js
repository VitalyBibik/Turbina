import styles from './header-music.module.css';
import Banner from '../banner/index';
import cn from 'classnames';
import Turbina from '../turbina/index';
import SoundPlayer from '../audio-player/index';
import React, { useState } from 'react';
import { audioTracks } from '../../fixtures';

function HeaderMusic() {
  const [count, setCount] = useState(false);

  return (
    <div className={styles['container']}>
      <div
        className={cn(
          styles['header-music'],
          styles['container__header-music']
        )}
      >
        <Banner />
        <div>
          <button
            className={cn(
              styles['header-music__button'],
              styles['header-block_mobile']
            )}
            onclick={() => setCount(!count)}
          >
            Стриминги
          </button>
          <ul className={cn(styles['header-block-ul'])}>
            <li className={styles['header-block']}>
              <a
                href="/"
                className={cn(styles['header-block'], styles['header-link'])}
              >
                {' '}
                Яндекс.Музыка &#8599;
              </a>
            </li>
            <li className={styles['header-block']}>
              {' '}
              <a
                href="/"
                className={cn(styles['header-block'], styles['header-link'])}
              >
                {' '}
                Spotify &#8599;
              </a>
            </li>
            <li className={styles['header-block']}>
              {' '}
              <a
                href="/"
                className={cn(styles['header-block'], styles['header-link'])}
              >
                {' '}
                Apple Music &#8599;
              </a>
            </li>
            <li className={styles['header-block']}>
              {' '}
              <a
                href="/"
                className={cn(styles['header-block'], styles['header-link'])}
              >
                {' '}
                VK Music &#8599;
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Turbina />
      <SoundPlayer />
    </div>
  );
}

export default HeaderMusic;
