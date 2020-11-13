import styles from './button-clip.module.css';
import React from 'react';
import cn from 'classnames';

const ButtonClip = ({ clip }) => (
  <a
    href={clip}
    rel="noreferrer"
    target="_blank"
    className={cn(styles['icon'], styles['icon_type_clip'])}
  >
    {clip}
  </a>
);

export default ButtonClip;
