import styles from './footer.module.css';
import React from 'react';

function Footer({ config }) {
  const author = config.footerLogo.map((element) => {
    return (
      <h3 className={styles['footer__text']} key={element.id}>
        {' '}
        {element.author}{' '}
      </h3>
    );
  });
  const footerLink = config.footerLinks.map((element) => {
    return (
      <a
        key={element.id}
        href={element.link}
        target="_blank"
        rel="noreferrer"
        className={styles['footer__link']}
      >
        {element.name}
      </a>
    );
  });

  return (
    <div className={styles['footer']}>
      {author}
      <p className={styles['footer__text']}>Сделано студентами {footerLink}</p>
    </div>
  );
}

export default Footer;
