import styles from './section-title.module.css';
import React from 'react';

const SectionTitle = ({ title }) => (
  <h2 className={styles['section-title']}>{title}</h2>
);

export default SectionTitle;
