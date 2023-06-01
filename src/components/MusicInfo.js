import React from 'react';
import "./info.css"
const MusicInfo = ({ music }) => {
  return (
    <div className="music-info-p">
      {music && (
        <div className='music-info'>
          <img src={music.picture} alt={music.name} />
          <p>{music.name}</p>
        </div>
      )}
    </div>
  );
};

export default MusicInfo;
