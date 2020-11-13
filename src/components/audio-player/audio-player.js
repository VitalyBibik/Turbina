import React, { useRef, useState } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import cn from 'classnames';
import styles from './audio-player.module.css';
import ctm from '../../utils/convert-to-minutes';
import throttling from '../../utils/throttling';
import PlayerTimeline from '../player-timeline';
import PlayerItems from '../player-items/player-items';
import ButtonClip from '../button-clip';

function SoundPlayer({ playlist }) {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);

  const [infoReliz, setInfoReliz] = useState(false); // reliz block or text block
  const [infoText, setInfoText] = useState(false); // text
  const [posterImg, setPosterImg] = useState(false); // openPoster/hidePoster
  const [buttonManagement, setButtonManagement] = useState(false); // openBlock/hideBlock
  const [infoButton, setInfoButton] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false); // play or pause
  const myPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); //  time song
  const [duration, setDuration] = useState(0);

  const isLoggedIn = currentTrack.clip;

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };

  return (
    <div className={cn(styles['player'])}>
      <img
        className={cn(
          styles['cover'],
          !posterImg && styles['cover_is-invisible']
        )}
        src={
          currentTrack.poster
            ? currentTrack.poster
            : (currentTrack.poster = 'https://via.placeholder.com/200')
        }
        alt={'Иллюстрация для обложки'}
      />

      <div className={styles['controls']}>
        <span
          onClick={(_) => {
            if (isPlaying) {
              myPlayer.current.pause();
              setIsPlaying(false);
            } else {
              myPlayer.current.play();
              setIsPlaying(true);
            }
          }}
          className={cn(
            styles['icon'],
            isPlaying ? styles['icon_type_pause'] : styles['icon_type_play']
          )}
        />
      </div>

      <div className={styles['info-play']}>
        <div className={styles['description']}>
          <span className={styles['treck-info']}>
            {`${currentTrack.title} -  ${currentTrack.performer}`} <i>feat.</i>{' '}
            {`${currentTrack.author}`}
          </span>
          <span className={styles['timer']}>{ctm(duration - currentTime)}</span>
        </div>
        <PlayerTimeline
          currentTime={currentTime}
          duration={duration}
          onClick={(time) => {
            myPlayer.current.currentTime = time;
          }}
        />
      </div>
      {buttonManagement && isLoggedIn && (
        <ButtonClip clip={currentTrack.clip} />
      )}
      <div className={styles['info-buttons']}>
        <button
          className={cn(
            styles['button'],
            styles['button_type_text'],
            styles['button_color_transparent'],
            !buttonManagement && styles['button_is-invisible']
          )}
          onClick={() => {
            setInfoButton(!infoButton);
            setInfoReliz(!infoReliz); // Убираем блок инфо релиз
            setInfoText(!infoText); // Убираем блок инфо текст
          }}
        >
          {infoButton ? 'Релизы' : 'Текст песни'}
        </button>
      </div>
      <div className={cn(styles['info-blocks'])}>
        <div
          className={cn(
            // скрытие релиза блока
            styles['info-block'],
            !infoReliz && styles['info-block_is-invisible']
          )}
        >
          <Scrollbar
            style={{
              width: '100%',
              height: 115,
            }}
          >
            <h2 className={styles['info-block__title']}>Релизы:</h2>
            <ul className={styles['info-block__list']}>
              {playlist.map((item) => (
                <PlayerItems
                  item={item}
                  key={item.id}
                  onClick={(item) => {
                    setCurrentTrack(item);
                    setIsPlaying(false);
                  }}
                />
              ))}
            </ul>
          </Scrollbar>
        </div>

        <div
          className={cn(
            // скрытие текста блока
            styles['info-block'],
            !infoButton && styles['info-block_is-invisible']
          )}
        >
          <Scrollbar
            style={{
              width: '100%',
              height: 115,
            }}
          >
            <h2 className={styles['info-block__title']}>Текст песни:</h2>
            <p className={styles['info-block__text']}>{currentTrack.text}</p>
          </Scrollbar>
        </div>
      </div>

      <div className={styles['change-buttons']}>
        <span //Кнопка с крестиком
          className={cn(
            styles['icon'],
            buttonManagement
              ? styles['icon_type_close']
              : styles['icon_type_open']
          )}
          onClick={() => {
            setButtonManagement(!buttonManagement); // Меняем слушатель кнопки Релиз/Текст
            setInfoReliz(!infoReliz); // Убираем блок инфо релиз
            setInfoText(!infoText); // Убираем блок инфо текст
            setPosterImg(!posterImg); // НЕ ТРОГАТЬ
            if (buttonManagement === false) {
              setButtonManagement(!buttonManagement);
            }
          }}
        />
      </div>
      <audio
        className={styles['audio']}
        src={currentTrack.audioFile}
        ref={myPlayer}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
        loop={false} // Не играет повторно, true играет
        onLoadedData={(_) => {
          console.log('loaded');
          setDuration(myPlayer.current.duration);
        }}
      >
        Your browser doesn't support the tag "audio"
      </audio>
    </div>
  );
}

export default SoundPlayer;
