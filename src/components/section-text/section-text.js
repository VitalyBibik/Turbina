import styles from './section-text.module.css';
import cn from 'classnames';

function SectionText({ text }) {
  return <p className={styles['section-text']}>{text}</p>;
}

export default SectionText;
