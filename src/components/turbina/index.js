import React from 'react';
import styles from './turbina.module.css';
import DefaultBanner from './Turbina.png';
import MobileBanner from './Turbina-mobile.png';

const Turbina = ({ img = DefaultBanner, phoneImg = MobileBanner }) => (
  <div className={styles.banner}>
    <picture className={styles['picture-banner']}>
      <source
        srcSet={phoneImg}
        media="(min-width: 320px) and (max-width:700px)"
      />
      <img srcSet={img} alt="Full Logo" />
    </picture>
  </div>
);

/*


    Это должно быть внутри тут
*/

export default Turbina;
