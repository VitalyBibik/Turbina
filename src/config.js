import audioFile from './components/audio-files/Instrumental_Soon_-_Astronomia_2K19_71386145.mp3';
import wuTangCream from './components/audio-files/Little_Big_-_UNO_68748523.mp3';

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
      title: 'Sample',
      text: '',
      poster: '',
      performer: '',
      author: 'Sample',
      audioFile,
      id: 1,
    },
    {
      title: 'CREAM',
      text: '',
      poster: '',
      performer: '',
      author: 'Wu-tang',
      audioFile: wuTangCream,
      id: 2,
    },
    {
      title: '123',
      text: '',
      poster: '',
      performer: '',
      author: '123g',
      audioFile: wuTangCream,
      id: 3,
    },
    {
      title: 'CREAM',
      author: 'Wu-tang',
      audioFile: wuTangCream,
      id: 4,
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
