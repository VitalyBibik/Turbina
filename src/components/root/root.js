import styles from './root.module.css';
import React from 'react';
import SectionBlock from '../section-block/section-block';
import { mainPageText } from '../../fixtures';
import SectionForm from '../section-form';
import SectionButton from '../section-button';

function Root() {
  return (
    <div className={styles.root}>
      <SectionButton sectionButton={mainPageText} />
      <SectionBlock sectionBlock={mainPageText} />
      <SectionForm form={mainPageText} />
    </div>
  );
}

export default Root;
