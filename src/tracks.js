import audioFile from './components/audio-files/Instrumental_Soon_-_Astronomia_2K19_71386145.mp3';
import Little_Big from './components/audio-files/Little_Big_-_UNO_68748523.mp3';
import blackMagican from './components/audio-files/blackMagican.mp3';
import riderOfIce from './components/audio-files/riderOfIce.mp3';
import posterBlackMagican from './components/audio-files/blackMagican.jpg';
import posterRiderOfIce from './components/audio-files/riderOfIce.jpg';
import poster from './components/audio-files/pic.jpg';

const tracks = {
  playlist: [
    {
      id: 1,
      title: 'Super puper track long 2345',
      clip: '',
      poster: '',
      performer: 'Sample1',
      author: 'Sample',
      audioFile,
      text: `Унылая пора! Очей очарованье!'/n'
      Приятна мне твоя прощальная краса —'/n'
      Люблю я пышное природы увяданье,'/n'
      В багрец и в золото одетые леса,'/n'
      В их сенях ветра шум и свежее дыханье,'/n'
      И мглой волнистою покрыты небеса,/n
      И редкий солнца луч, и первые морозы,'/n'
      И отдаленные седой зимы угрозы.'/n'`,
    },
    {
      id: 2,
      title: 'CREAM',
      clip: '',
      poster: poster,
      performer: 'Little_Big1',
      author: 'Little_Big',
      audioFile: Little_Big,
      text: `Октябрь уж наступил — уж роща отряхает'/n'
      Последние листы с нагих своих ветвей;'/n'
      Дохнул осенний хлад — дорога промерзает.'/n'
      Журча еще бежит за мельницу ручей,'/n'
      Но пруд уже застыл; сосед мой поспешает'/n'
      В отъезжие поля с охотою своей,'/n'
      И страждут озими от бешеной забавы,'/n'
      И будит лай собак уснувшие дубравы.'/n'`,
    },
    {
      id: 3,
      title: 'Черный маг',
      clip:
        'https://yandex.ru/video/preview?text=%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B0%D0%B3%20%D0%BA%D0%BB%D0%B8%D0%BF&path=wizard&parent-reqid=1605269912739770-387624101159007167800106-production-app-host-man-web-yp-220&wiz_type=vital&filmId=1593296743638318191',
      poster: posterBlackMagican,
      performer: 'Эпидемия',
      author: '123g',
      audioFile: blackMagican,
      text: `Он с детства был слаб, он познал унижения.'/n'
      Изгой в этом мире искал силы суть,'/n'
      И в книгах волшебных, найдя утешение,'/n'
      Ступил на извилистый магии путь.'/n'
      '/n'
      Он не просил, не просил помочь –'/n'
      Он видел свет, он знал ответ.'/n'
      Он не хотел, не хотел, но ночь'/n'
      В его душе оставит след!'/n'
      '/n'
      Ты Черный Маг – ты обречен,'/n'
      Такая плата, таков закон!'/n'`,
    },
    {
      id: 4,
      title: 'Всадник из льда',
      youtube: 'https://www.youtube.com/watch?v=r-pXsQXkVCg',
      poster: posterRiderOfIce,
      performer: 'Эпидемия',
      author: 'Apl',
      audioFile: riderOfIce,
      text: `Застыв на ветру'/n'
      У синего льда,'/n'
      Я скоро умру -'/n'
      Уйду навсегда.'/n'
      '/n'
      Я верил тебе,'/n'
      А сейчас я верю судьбе.'/n'
      Свет погас, ведь солнце зашло'/n'
      Для меня навсегда.'/n'
      Навсегда'/n'
      
      Я сам погубил -'/n'
      Уже не вернуть.'/n'
      Тебя не хранил,'/n'
      И проклят мой путь.'/n'`,
    },
  ],
};

export { tracks };
