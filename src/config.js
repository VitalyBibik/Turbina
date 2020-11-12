import audioFile from './components/audio-files/Instrumental_Soon_-_Astronomia_2K19_71386145.mp3';
import wuTangCream from './components/audio-files/Little_Big_-_UNO_68748523.mp3';
import blackMagigan from './components/audio-files/blackMagigan.mp3';
import riderOfIce from './components/audio-files/riderOfIce.mp3';
import posterBlackMagigan from './components/audio-files/blackMagigan.jpg';
import posterRiderOfIce from './components/audio-files/riderOfIce.jpg';

const config = {
  stream: [
    {
      id: 1,
      name: 'Яндекс.Музыка',
      link: '/',
    },
    {
      id: 2,
      name: 'Spotify',
      link: '/',
    },
    {
      id: 3,
      name: 'Apple Music',
      link: '/',
    },
    {
      id: 4,
      name: 'VK Music',
      link: '/',
    },
  ],
  playlist: [
    {
      id: 1,
      title: 'Sample',
      poster: '',
      performer: '',
      author: 'Sample',
      audioFile,
      text: '',
    },
    {
      id: 2,
      title: 'CREAM',
      poster: '',
      performer: '',
      author: 'Wu-tang',
      audioFile: wuTangCream,
      text: '',
    },
    {
      id: 3,
      title: 'Черный маг',
      poster: posterBlackMagigan,
      performer: 'Эпидемия',
      author: '123g',
      audioFile: blackMagigan,
      text: `Он с детства был слаб, он познал унижения.
      Изгой в этом мире искал силы суть,
      И в книгах волшебных, найдя утешение,
      Ступил на извилистый магии путь.
      
      Он не просил, не просил помочь –
      Он видел свет, он знал ответ.
      Он не хотел, не хотел, но ночь
      В его душе оставит след!
      
      Ты Черный Маг – ты обречен,
      Такая плата, таков закон!`,
    },
    {
      id: 4,
      title: 'Всадник из льда',
      poster: posterRiderOfIce,
      performer: 'Эпидемия',
      author: 'Apl',
      audioFile: riderOfIce,
      text: `Застыв на ветру
      У синего льда,
      Я скоро умру -
      Уйду навсегда.
      
      Я верил тебе,
      А сейчас я верю судьбе.
      Свет погас, ведь солнце зашло
      Для меня навсегда.
      Навсегда
      
      Я сам погубил -
      Уже не вернуть.
      Тебя не хранил,
      И проклят мой путь.`,
    },
  ],

  footerLinks: [
    {
      id: 1,
      name: 'Яндекс.Практикум',
      link: 'https://praktikum.yandex.ru/',
    },
  ],
  footerLogo: [
    {
      id: 1,
      author: '© Маршак, 2020.',
    },
  ],
};

export { config };
