import React from 'react';
import styles from './turbina.module.css';
import DefaultBanner from './Turbina.png';
import MobileBanner from './Turbina-mobile.png';

const Turbina = ({ img = DefaultBanner, phoneImg = MobileBanner }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.banner} />
    <picture className={styles['picture-banner']}>
      <source
        srcSet={img}
        className={styles.img}
        media="(min-width: 320px) and (max-width:700px)"
      />
      <source
        srcSet={phoneImg}
        className={styles.img}
        media="(min-width: 701px)"
      />
    </picture>
  </div>
);

/*
 <img src={img} className={styles.img}/>

    Это должно быть внутри тут
*/

export default Turbina;
