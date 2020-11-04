import styles from './section-block.module.css';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';
import SectionTezis from '../section-tezis/section-tezis';

function SectionBlock({ sectionBlock }) {
  function renderTezis(sectionBlock) {
    return (
      <div className={styles['section-block']}>
        <SectionTezis text={sectionBlock.tezisText} />
      </div>
    );
  }
  function renderMainPage(sectionBlock) {
    return sectionBlock.mainText.map((item) => {
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
  function renderAll(sectionBlock) {
    return renderMainPage(sectionBlock);
    renderTezis(sectionBlock);
  }

  return renderAll(sectionBlock);
}

export default SectionBlock;
