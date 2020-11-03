import styles from './section-block.module.css';
import cn from 'classnames';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';

function SectionBlock({ sectionBlock }) {
  const renderText = sectionBlock.forEach((item) => {
    <div className={styles['section-block']}>
      <SectionTitle title={item.title} />
      item.text.length > 1 ? item.text.forEach((item) =>{' '}
      {<SectionText SectionText={item} />}) :{' '}
      <SectionText SectionText={item.text} />
    </div>;
  });

  return renderText;
}

export default SectionBlock;
