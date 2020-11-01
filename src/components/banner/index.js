import React from 'react';
import styles from './banner.module.css';
import DefaultBanner from './banner.png';

const Banner = ({ img = DefaultBanner }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.img} alt="banner.Баннер" />
  </div>
);

export default Banner;
