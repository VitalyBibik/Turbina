import styles from './section-title.module.css';
import cn from 'classnames';

function SectionTitle({ title }) {
  return <h2 className={styles['section-title']}>{title}</h2>;
}

export default SectionTitle;
