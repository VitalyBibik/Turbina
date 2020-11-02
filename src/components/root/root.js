import styles from './root.module.css';
import cn from 'classnames';
import SectionBlock from '../section-block/section-block';
import { mainPageText } from '../../fixtures';

function Root() {
  return <SectionBlock sectionBlock={mainPageText} />;
}

export default Root;
