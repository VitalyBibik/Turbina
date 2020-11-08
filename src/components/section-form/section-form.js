import styles from './section-form.module.css';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';
import React from 'react';
import Form from '../form';

function SectionForm({ form }) {
  return (
    <div className={styles['section-form']}>
      <SectionTitle title={form.formText[0].title} />
      <SectionText text={form.formText[0].text[0]} />
      <Form />
    </div>
  );
}

export default SectionForm;
