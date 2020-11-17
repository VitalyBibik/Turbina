import styles from './header-music.module.css';
import Banner from '../banner/index';
import cn from 'classnames';
import Turbina from '../turbina/index';
import SoundPlayer from '../audio-player/index';
import React, { useState } from 'react';

function HeaderMusic({ config }) {
  const [open, setOpen] = useState(false);

  const [blur, setBlur] = useState(false);

  const linkRender = config.stream.map((element) => {
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
    <div className={cn(styles['container'])}>
      <div
        className={cn(
          styles['header-music'],
          {
            [styles['header-music_for_player']]: blur,
          },
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
              {
                [styles['menu__burger']]: open,
              }
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? '' : 'Стриминги'}
          </button>
          <ul
            className={cn(styles['header-block-ul'], {
              [styles['header-block-ul__open']]: open,
            })}
          >
            {linkRender}
          </ul>
        </div>
      </div>
      <Turbina hdBlur={blur} />
      <SoundPlayer
        playlist={config.playlist}
        onClick={(status) => {
          setBlur(!status);
        }}
      />
    </div>
  );
}

export default HeaderMusic;
