import React from 'react';
import { SongListContainer, Song, Button } from './styles';

const SongList = ({ songs, onRetry, onMakePlaylist }) => {
  return (
    <SongListContainer>
      <ul>
        {songs.map((song, index) => (
          <Song key={index}>{song}</Song>
        ))}
      </ul>
      <Button onClick={onMakePlaylist}>MAKE THE PLAYLIST</Button>
      <Button onClick={onRetry}>TRY AGAIN</Button>
    </SongListContainer>
  );
};

export default SongList;
