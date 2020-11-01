import styles from './header-music.module.css';
import Banner from '../banner/index';
import cn from 'classnames';
import Turbina from '../turbina/index';

function HeaderMusic() {
  return (
    <div className={styles['container']}>
      <div
        className={cn(
          styles['header-music'],
          styles['container__header-music']
        )}
      >
        <Banner />
        <ul className={cn(styles['header-block-ul'])}>
          <li className={styles['header-block']}>
            <a
              href="/"
              className={cn(styles['header-block'], styles['header-link'])}
            >
              {' '}
              Яндекс.Музыка '↗'
            </a>
          </li>
          <li className={styles['header-block']}>
            {' '}
            <a
              href="/"
              className={cn(styles['header-block'], styles['header-link'])}
            >
              {' '}
              Spotify '↗'
            </a>
          </li>
          <li className={styles['header-block']}>
            {' '}
            <a
              href="/"
              className={cn(styles['header-block'], styles['header-link'])}
            >
              {' '}
              Apple Music '↗'
            </a>
          </li>
          <li className={styles['header-block']}>
            {' '}
            <a
              href="/"
              className={cn(styles['header-block'], styles['header-link'])}
            >
              {' '}
              VK Music '↗'
            </a>
          </li>
        </ul>
      </div>
      <Turbina />
    </div>
  );
}

export default HeaderMusic;
