import styles from './section-tezis.module.css';
import cn from 'classnames';

function SectionTezis({ text }) {
  console.log('ListSuccess', text[0].text); // Тут получаем ul-li
  return (
    <ul className={styles['section-tezis']}>
      {text[0].text.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default SectionTezis;
