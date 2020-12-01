import styles from './section-block.module.css';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';
import SectionTezis from '../section-tezis/section-tezis';
import React from 'react';

function SectionBlock({ sectionBlock }) {
  return (
    <>
      {sectionBlock.mainText.map((item) => (
        <div className={styles['section-block']} key={item.id}>
          <SectionTitle title={item.title} />
          {item.text.length > 1 ? (
            item.text.map((item, index) => (
              <SectionText text={item} key={index} />
            ))
          ) : (
            <SectionText text={item.text[0]} />
          )}
        </div>
      ))}
      <div className={styles['section-block']}>
        <SectionTitle title={sectionBlock.tezisText[0].title} />
        <SectionTezis text={sectionBlock.tezisText} />
      </div>
    </>
  );
}

export default SectionBlock;
