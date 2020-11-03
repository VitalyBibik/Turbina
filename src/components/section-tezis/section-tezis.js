import styles from './section-tezis.module.css';
import cn from 'classnames';

function SectionTezis({ text }) {
  console.log('ListSuccess'); // Тут получаем ul-li
  return (
    <ul className={styles['section-tezis']}>
      {text.map((item, index) => {
        <li key={index}>{item.text}</li>;
      })}
    </ul>
  );
}

export default SectionTezis;
