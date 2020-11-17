import React, { useRef, useState } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import cn from 'classnames';
import styles from './audio-player.module.css';
import ctm from '../../utils/convert-to-minutes';
import throttling from '../../utils/throttling';
import PlayerTimeline from '../player-timeline';
import PlayerItems from '../player-items/player-items';
import ButtonClip from '../button-clip';
import DefaultImage from '../audio-files/pic.jpg';
import { CSSTransition } from 'react-transition-group';
import { IconClose, IconOpen, IconPause, IconPlay } from '../svg-icons';

function SoundPlayer({ playlist, onClick }) {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [allTracks] = useState(playlist);

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

  const canPlay = useRef(false);

  const [blur, setBlur] = useState(false);

  const blurHandler = (e) => {
    setBlur(!blur);
    onClick(blur);
  };

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };
  const onPause = (e) => {
    setDuration(e.target.duration);
    canPlay.current = false;
  };
  const onEnded = (e) => {
    const indexTrack = allTracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    if (indexTrack === allTracks.length - 1) {
      setCurrentTrack(allTracks[0]);
      canPlay.current = false;
      return setIsPlaying(false);
    }
    setCurrentTrack(allTracks[indexTrack + 1]);
    canPlay.current = true;
  };
  const onCanPlay = (e) => {
    canPlay.current ? myPlayer.current.play() : myPlayer.current.pause();
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
        className={cn(styles['cover'], {
          [styles['cover_is-invisible']]: !posterImg,
        })}
        src={
          currentTrack.poster
            ? currentTrack.poster
            : (currentTrack.poster = DefaultImage)
        }
        alt="Иллюстрация для обложки"
      />

      <span
        onClick={(_) => {
          if (isPlaying) {
            myPlayer.current.pause();
            setIsPlaying(false);
          } else {
            myPlayer.current.play();
            canPlay.current = true;
            setIsPlaying(true);
          }
        }}
        className={cn(styles['icon'], styles['icon_block_controls'])}
      >
        {isPlaying ? (
          <IconPause className={styles['icon_type_pause']} />
        ) : (
          <IconPlay className={styles['icon_type_play']} />
        )}
      </span>

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
      <CSSTransition
        in={buttonManagement}
        timeout={300}
        classNames={styles['alert']}
      >
        <button
          className={cn(
            styles['button'],
            styles['button_block_info'],
            styles['button_type_text'],
            styles['button_color_transparent'],
            {
              [styles['button_is-invisible']]: !buttonManagement,
            }
          )}
          onClick={() => {
            setInfoButton(!infoButton);
            setInfoReliz(!infoReliz); // Убираем блок инфо релиз
            setInfoText(!infoText); // Убираем блок инфо текст
          }}
        >
          {infoButton ? 'Релизы' : 'Текст песни'}
        </button>
      </CSSTransition>
      <div className={cn(styles['info-blocks'])}>
        <div
          className={cn(
            // скрытие релиза блока
            styles['info-block'],
            {
              [styles['info-block_is-invisible']]: !infoReliz,
            }
          )}
        >
          <Scrollbar
            style={{
              width: '100%',
              height: 115,
            }}
          >
            <h2 className={styles['info-block__title']}>
              {allTracks.length > 1 ? 'Релизы' : 'Пока у нас только 1 релиз'}
            </h2>
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
                      if (isPlaying) {
                        setIsPlaying(true);
                      }
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
            {
              [styles['info-block_is-invisible']]: !infoButton,
            }
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
        className={cn(styles['icon'], styles['icon_block_management'])}
        onClick={() => {
          setButtonManagement(!buttonManagement); // Меняем слушатель кнопки Релиз/Текст
          setInfoReliz(!infoReliz); // Убираем блок инфо релиз
          setInfoText(!infoText); // Убираем блок инфо текст
          setPosterImg(!posterImg); // НЕ ТРОГАТЬ
          blurHandler();
          if (buttonManagement === false) {
            setButtonManagement(!buttonManagement);
          }
        }}
      >
        {buttonManagement ? (
          <IconClose className={styles['icon_type_close']} />
        ) : (
          <IconOpen className={styles['icon_type_open']} />
        )}
      </span>

      <audio
        className={styles['audio']}
        src={currentTrack.audioFile}
        ref={myPlayer}
        onPlay={onPlay}
        onPause={onPause}
        onCanPlay={onCanPlay}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        loop={false} // Не играет повторно, true играет
        onLoadedData={(_) => {
          setDuration(myPlayer.current.duration);
        }}
      >
        Your browser doesn't support the tag "audio"
      </audio>
    </div>
  );
}

export default SoundPlayer;
