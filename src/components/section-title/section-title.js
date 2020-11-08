import styles from './section-title.module.css';

const SectionTitle = ({ title }) => (
  <h2 className={styles['section-title']}>{title}</h2>
);

export default SectionTitle;
