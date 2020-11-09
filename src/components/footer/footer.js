import styles from './footer.module.css';
import React from 'react';
// TODO переписать на цикл получения с конфига

function Footer({ config }) {
  console.log(
    'config',
    config.footerLogo.map((element) => {
      console.log(element);
    })
  );
  return (
    <div className={styles['footer']}>
      <h3 className={styles['footer__text']}>© Маршак, 2020.</h3>
      <p className={styles['footer__text']}>
        Сделано студентами{' '}
        <a
          href="https://praktikum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
          className={styles['footer__link']}
        >
          Яндекс.Практикум
        </a>
      </p>
    </div>
  );
}

export default Footer;
