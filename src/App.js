import React, { useState } from 'react';
import './App.css';
import { musics } from './data';
import MusicInfo from './components/MusicInfo';
import MusicList from './components/List';

function App() {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicClick = (music) => {
    setSelectedMusic(music);
  };

  return (
    <div className="App">
            <MusicInfo music={selectedMusic} />

    <MusicList handleMusicClick={handleMusicClick} musics={musics}/>
    </div>
  );
}

export default App;
