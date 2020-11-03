import styles from './root.module.css';
import cn from 'classnames';
import React from 'react';
import SectionBlock from '../section-block/section-block';
import { mainPageText } from '../../fixtures';

function Root() {
  return (
    <div className={styles.root}>
      <SectionBlock sectionBlock={mainPageText} />
    </div>
  );
}

export default Root;
