import styles from './section-button.module.css';
import React from 'react';

const SectionButton = (props) => (
  <button className={styles['section-button']}>{props}</button> // TODO Сделать рендер из фикстуры кнопки
);
export default SectionButton;
