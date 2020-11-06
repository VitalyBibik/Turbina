import React from 'react';
import cn from 'classnames';
import styles from './audio-player.module.css';

function SoundPlayer() {
  return (
    <section className={styles['audio-player']}>
      <div className={styles['player']}>
        <audio id="audio" src=""></audio>
        <div className={styles['controls']} id="controls">
          <span className={cn(styles['icon'], styles['icon_type_play'])}></span>
          <span
            className={cn(
              styles['icon'],
              styles['icon_type_pause'],
              styles['icon_is-invisible']
            )}
          ></span>
        </div>

        <div className={styles['info']}>
          <div className={styles['info__play']}>
            <div className={styles['blocks']}>
              <div className={styles['description']}>
                <span className={styles['treck-info']}>
                  {' '}
                  Контур - Хадн Дадн feat. Варя Карпова и Федя Быстров
                </span>
                <div>
                  <span className={styles['timer']} id="time">
                    2:24
                  </span>
                </div>
              </div>

              <div className={styles['seekbar']} id="seek">
                <div className={styles['seekbar__wrap']}>
                  <div className={styles['seekbar__buffer']} id="buffer"></div>
                  <div
                    className={styles['seekbar__progress']}
                    id="progress"
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles['info__buttons']}>
              <button
                className={cn(
                  styles['button'],
                  styles['button_type_releases'],
                  styles['button_is-invisible']
                )}
              >
                Релизы
              </button>
              <button
                className={cn(
                  styles['button'],
                  styles['button_type_text'],
                  styles['button_is-invisible']
                )}
              >
                Текст песни
              </button>
            </div>
          </div>

          <div
            className={cn(
              styles['info-block'],
              styles['info-block_is-invisible']
            )}
            id="releases"
          >
            <h2 className={styles['info-block__title']}>Релизы:</h2>
            <ul className={styles['info-block__list']}>
              <li className={styles['info-block__item']}>
                Лодка — СБПЧ feat. Маруся Романова
              </li>
              <li className={styles['info-block__item']}>
                Кирпичи — Инди группа feat. Пётр Сковородников
              </li>
            </ul>
          </div>

          <div
            className={cn(
              styles['info-block'],
              styles['info-block_is-invisible']
            )}
            id="text-song"
          >
            <h2 className={styles['info-block__title']}>Текст песни:</h2>
            <p className={styles['info-block__text']}>
              Он с детства был слаб, он познал унижения.
              <br />
              Изгой в этом мире искал силы суть,
              <br />
              И в книгах волшебных, найдя утешение,
              <br />
              Ступил на извилистый магии путь.
              <br />
              <br />
              Он не просил, не просил помочь – <br />
              Он видел свет, он знал ответ. <br />
              Он не хотел, не хотел, но ночь <br />
              В его душе оставит след! <br />
              <br />
              Ты Черный Маг – ты обречен, <br />
              Такая плата, таков закон! <br />
              <br />
              И вот он хозяин своих заклинаний
              <br />
              И солнечный день обратить может в ночь,
              <br />
              Но время пришло, и нет больше желаний
              <br />
              И магия больше не в силах помочь.
              <br />
              <br />
              Он не просил, не просил помочь –<br />
              Он видел свет, он знал ответ.
              <br />
              Он не хотел, не хотел, но ночь
              <br />
              В его душе оставит след!
              <br />
              <br />
              Ты Черный Маг – ты обречен,
              <br />
              Такая плата, таков закон!
              <br />
              <br />
              Черный балахон
              <br />
              Не спасет тебя от страшных снов.
              <br />
              Погребальный звон
              <br />
              По твоей душе колоколов.
              <br />
              Велика цена,
              <br />
              Ведь знание – это Власть,
              <br />
              Кто взлетел наверх,
              <br />
              Может низко пасть.
              <br />
            </p>
          </div>
        </div>

        <div className={styles['change-button']}>
          <span className={cn(styles['icon'], styles['icon_type_open'])}></span>
          <span
            className={cn(
              styles['icon'],
              styles['icon_type_close'],
              styles['icon_is-invisible']
            )}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default SoundPlayer;
