import styles from './section-text.module.css';
import cn from 'classnames';

function SectionText({ text }) {
  console.log('textSuccess'); //  Получаем тут текст
  return <p className={styles['section-text']}>{text}</p>;
}

export default SectionText;
