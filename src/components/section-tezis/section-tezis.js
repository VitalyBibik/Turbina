import styles from './section-tezis.module.css';
import React from 'react';

function SectionTezis({ text }) {
  return (
    <ul className={styles['section-tezis']}>
      {text[0].text.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default SectionTezis;
