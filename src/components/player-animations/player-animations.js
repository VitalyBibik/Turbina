import React from 'react';
import styles from './player-animations.module.css';
import { CSSTransition } from 'react-transition-group';

const PlayerAnimations = ({}) => {
  console.log('animationProps', props);
  return (
    <>
      <CSSTransition
        timeout={500}
        classNames={{
          enterActive: styles['animation-enter'],
          enterDone: styles['animation-enter-active'],
          exitActive: styles['animation-exit-done'],
          // exitDone: stylesAnimation['info-blocks-animation-exit-done']
        }}
      ></CSSTransition>
    </>
  );
};
const PlayerListItem = ({ item, onClick }) => {
  const {
    title = 'No title',
    performer = 'No performer',
    author = 'No author',
  } = item;
  return (
    <li className={styles['info-block__item']} onClick={(_) => onClick(item)}>
      {`${title} -  ${performer}`} <i>feat.</i> {author}
    </li>
  );
};
export default PlayerAnimations;
