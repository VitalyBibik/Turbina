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
  const [allTracks, setAllTracks] = useState(playlist);

  const [infoReliz, setInfoReliz] = useState(false); // reliz block or text block
  const [infoText, setInfoText] = useState(false); // text
  const [posterImg, setPosterImg] = useState(false); // openPoster/hidePoster
  const [buttonManagement, setButtonManagement] = useState(false); // openBlock/hideBlock
  const [infoButton, setInfoButton] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false); // play or pause
  const myPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); //  time song
  const [duration, setDuration] = useState(0);

  const isLoggedIn = currentTrack?.clip;

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };
  const onPause = (e) => {
    setDuration(e.target.duration);
  };
  const onEnded = (e) => {
    console.log('Закончилось', e);
    console.log(allTracks, 'alltracks');
    const indexTrack = allTracks.findIndex(
      (track) => track.id === currentTrack.id
    );
    if (indexTrack === allTracks.lastIndex) {
      alert('end');
    } else {
      return setCurrentTrack(allTracks[indexTrack + 1]);
    }
    // console.log(indexTrack,'und');
  };
  const onCanPLay = (e) => {
    console.log('CanPLay', e);
  };
  const getTextBlock = (text) => {
    const regExp = /[/a-z']+/;
    return text.split('\n').map((str, i) => (
      <p className={styles['info-block__text']} key={i}>
        {str.replace(regExp, '')}
      </p>
    ));
  };

  return (
    <div className={cn(styles['player'], styles['player-is-open'])}>
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
          styles['icon_block_controls'],
          isPlaying ? styles['icon_type_pause'] : styles['icon_type_play']
        )}
      />

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
      <button
        className={cn(
          styles['button'],
          styles['button_block_info'],
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
              {allTracks.map((item) => {
                if (item.id === currentTrack.id) {
                  return null;
                }
                return (
                  <PlayerItems
                    item={item}
                    key={item.id}
                    onClick={(item) => {
                      setCurrentTrack(item);
                      setIsPlaying(false);
                    }}
                  />
                );
              })}
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
            {getTextBlock(currentTrack.text)}
          </Scrollbar>
        </div>
      </div>

      <span //Кнопка с крестиком
        className={cn(
          styles['icon'],
          styles['icon_block_management'],
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

      <audio
        className={styles['audio']}
        src={currentTrack.audioFile}
        ref={myPlayer}
        onPlay={onPlay}
        onPause={onPause}
        onCanPlay={onCanPLay}
        onEnded={onEnded}
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
