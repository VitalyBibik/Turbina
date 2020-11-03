import styles from './section-block.module.css';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';

function SectionBlock({ sectionBlock }) {
  return sectionBlock.map((item) => {
    return (
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
    );
  });
}

export default SectionBlock;
