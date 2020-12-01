import React from 'react';
import styles from './turbina.module.css';
import DefaultBanner from './Turbina.png';
import MobileBanner from './Turbina-mobile.png';
import TableBanner from './Turbina-table.png';
import cn from 'classnames';

const Turbina = ({
  img = DefaultBanner,
  phoneImg = MobileBanner,
  tableImg = TableBanner,
  hdBlur,
}) => {
  return (
    <div
      className={cn(styles['banner'], {
        [styles['banner_for_player']]: hdBlur,
      })}
    >
      <picture
        className={cn(styles['picture-banner'], styles['header-music__banner'])}
      >
        <source
          srcSet={phoneImg}
          media="(min-width: 320px) and (max-width:400px)"
        />
        <source
          srcSet={tableImg}
          media="(min-width: 500px) and (max-width:885px)"
        />
        <img srcSet={img} alt="Full Logo" className={styles.banner} />
      </picture>
    </div>
  );
};

export default Turbina;
