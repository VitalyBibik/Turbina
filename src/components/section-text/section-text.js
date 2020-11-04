import styles from './section-text.module.css';

function SectionText({ text }) {
  return <p className={styles['section-text']}>{text}</p>;
}

export default SectionText;
