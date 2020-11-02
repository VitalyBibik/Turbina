import styles from './section-title.module.css';
import cn from 'classnames';


function SectionTitle({title}) {
    console.log(title,'Title'); // Тут получаем заголовок
    return (
        <h1 className={styles['section-title']}>{title}</h1>

    );
}

export default SectionTitle;
