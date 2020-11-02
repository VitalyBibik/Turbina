import styles from './section-block.module.css';
import cn from 'classnames';
import SectionTitle from '../section-title/section-title';
import SectionText from '../section-text/section-text';

function SectionBlock({ sectionBlock }) {
    /*
    sectionBlock.forEach((item) => {
        item.text.length > 1 ? item.text.forEach((Arrayitem) => {
            console.log('true', Arrayitem);
        }) : console.log('false', item.text)
    });
    Рабочий код для того, чтобы перебирать всю фикстуру по тексту для страницы
     */

    /*
        <div className={styles['section-block']}>
            <SectionTitle/>
            <SectionText/>
        </div>
       Целая компонента, которая должна быть изначально и переиспользована
       Снизу код должен перебирать фикстуру и рендерить в компонентах это все красиво, но я не допилил
     */
     */
    return (
        sectionBlock.forEach((item) => {
            <div className={styles['section-block']}>
                <SectionTitle title={item.title}/>
                item.text.length > 1 ? item.text.forEach((Arrayitem) => {
                    <SectionText text={Arrayitem}/>
                }) : <SectionText text={item.text}/>
            </div>
        });
    );
}

export default SectionBlock;
