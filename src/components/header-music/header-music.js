import styles from './header-music.module.css';
import Banner from '../banner/index';
import cn from 'classnames';
import Turbina from '../turbina/index';
import SoundPlayer from '../audio-player/index';
import React, { useState } from 'react';

function HeaderMusic({ stream }) {
  const [open, setOpen] = useState(false);

  const linkRender = stream.map((element) => {
    return (
      <li className={styles['header-block']} key={element.id}>
        <a
          href={element.link}
          target="_blank"
          rel="noreferrer"
          className={cn(styles['header-block'], styles['header-link'])}
        >
          {element.name}
        </a>
      </li>
    );
  });

  return (
    <div className={styles['container']}>
      <div
        className={cn(
          styles['header-music'],
          styles['container__header-music']
        )}
      >
        <Banner />
        <div className={styles['menu']}>
          <button
            className={cn(
              styles['header-music__button'],
              styles['header-block'],
              styles['header-block_mobile'],
              open ? styles['menu__burger'] : null
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? '' : 'Стриминги'}
          </button>
          <ul
            className={cn(
              styles['header-block-ul'],
              open ? styles['header-block-ul__open'] : null
            )}
          >
            {linkRender}
          </ul>
        </div>
      </div>
      <Turbina />
      <SoundPlayer />
    </div>
  );
}

export default HeaderMusic;
