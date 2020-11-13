import React from 'react';
import styles from './player-items.module.css';

const PlayerListItem = ({ item, onClick }) => {
  const {
    title = 'No title',
    performer = 'No performer',
    author = 'No author',
  } = item;
  return (
    <li className={styles['info-block__item']} onClick={(_) => onClick(item)}>
      {`${title} -  ${performer}`} <i>feat.</i> {`${author}`}
    </li>
  );
};

export default PlayerListItem;
