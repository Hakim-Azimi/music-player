import create from 'zustand';

const useMusicStore = create((set) => ({
  musics: [
    {
      id: 1,
      name: 'Par-e Parvaz',
      artist: 'Ragheb',
      src: './music/Ragheb - Pare Parvaz (320).mp3',
      picture: 'https://www.limusic.org/wp-content/uploads/2023/05/hs-Ragheb-%E2%80%93-Pare-Parvaz.jpg',
    },
    {
      id: 2,
      name: 'Bade Man',
      artist: 'Rastak',
      src: './music/Rastak - Bade Man (320).mp3',
      picture: 'https://assets.rjassets.com/static/mp3/rastaak-bade-man/9abe862e5222658.jpg',
    },
    {
      id: 3,
      name: 'Salam Aleykom Spanish',
      artist: 'Unknown',
      src: './music/Unknown Artist - Salam Aleykom Spanish (320).mp3',
      picture: 'https://i.scdn.co/image/ab67616d0000b273f2a4f29ec5256e9a959c2d20',
    },
    {
      id: 4,
      name: 'Del Pishet Ja Monde',
      artist: 'Mobin',
      src: './music/Mobin - Del Pishet Ja Monde (320).mp3',
      picture: 'https://music-fa.com/wp-content/uploads/2023/06/Mobin-Del-Pishet-Ja-Monde.jpg',
    },
  ],
  setMusics: (musics) => set(() => ({ musics })),
}));

export default useMusicStore;
