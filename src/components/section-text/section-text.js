import styles from './section-text.module.css';

const SectionText = ({ text }) => (
  <p className={styles['section-text']}>{text}</p>
);

export default SectionText;
