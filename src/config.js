import audioFile from './components/audio-files/Instrumental_Soon_-_Astronomia_2K19_71386145.mp3';
import Little_Big from './components/audio-files/Little_Big_-_UNO_68748523.mp3';
import blackMagican from './components/audio-files/blackMagican.mp3';
import riderOfIce from './components/audio-files/riderOfIce.mp3';
import posterBlackMagican from './components/audio-files/blackMagican.jpg';
import poster from './components/audio-files/pic.jpg';

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
      poster: poster,
      performer: 'Sample1',
      author: 'Sample',
      audioFile,
      text: `Унылая пора! Очей очарованье!
      Приятна мне твоя прощальная краса —
      Люблю я пышное природы увяданье,
      В багрец и в золото одетые леса,
      В их сенях ветра шум и свежее дыханье,
      И мглой волнистою покрыты небеса,
      И редкий солнца луч, и первые морозы,
      И отдаленные седой зимы угрозы.`,
    },
    {
      id: 2,
      title: 'CREAM',
      poster: poster,
      performer: 'Little_Big1',
      author: 'Little_Big',
      audioFile: wuTangCream,
      text: `Октябрь уж наступил — уж роща отряхает
      Последние листы с нагих своих ветвей;
      Дохнул осенний хлад — дорога промерзает.
      Журча еще бежит за мельницу ручей,
      Но пруд уже застыл; сосед мой поспешает
      В отъезжие поля с охотою своей,
      И страждут озими от бешеной забавы,
      И будит лай собак уснувшие дубравы.`,
    },
    {
      id: 3,
      title: 'Черный маг',
      poster: posterBlackMagican,
      performer: 'Эпидемия',
      author: '123g',
      audioFile: blackMagican,
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
