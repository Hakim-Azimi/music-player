import React from 'react';
import "./list.css";
import useMusicStore from './musicStore';

const MusicList = ({ handleMusicClick }) => {
  const musics = useMusicStore((state) => state.musics);

  return (
    <div className='list'>
      <h1>لیست موسیقی‌ها</h1>
      <ul>
        {musics.map((music) => (
          <li key={music.id} onClick={() => handleMusicClick(music)}>
            {music.name} - {music.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
