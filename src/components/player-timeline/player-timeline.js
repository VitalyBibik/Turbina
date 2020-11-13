import styles from './player-timeline.module.css';
import React from 'react';

const PlayerTimeline = ({ duration, currentTime, onClick }) => {
  const clickHandler = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const timeToGo = (duration / 100) * percentage;
    onClick(timeToGo);
  };
  return (
    <div className={styles['seekbar']} onClick={clickHandler}>
      <div
        className={styles['seekbar__progress']}
        style={{
          width: `${(currentTime / duration) * 100}%`,
        }}
      />
    </div>
  );
};

export default PlayerTimeline;
