import styles from './section-block.module.css';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';

function SectionBlock({ sectionBlock }) {
  return sectionBlock.map((item) => {
    <div className={styles['section-block']}>
      <SectionTitle title={item.title} />
      item.text.length > 1 ? return item.text.map((item) =>{' '}
      {<SectionText text={item} />} : <SectionText SectionText={item.text} />
    </div>;
  });
}

export default SectionBlock;
