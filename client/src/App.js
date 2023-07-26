import React, { useState } from 'react';
import TopicInputForm from './TopicInputForm';
import SongList from './SongList';
import { generateSongList, createPlaylist } from './api';

// The main App component
const App = () => {
  // State variables for the song list, playlist URL, and any error messages
  const [songs, setSongs] = useState([]);
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [error, setError] = useState('');

  // Function to generate a song list based on a topic
  const handleGenerate = async (topic) => {
    try {
      const songs = await generateSongList(topic);
      setSongs(songs);
      setError(''); // Clear any previous error messages
    } catch (error) {
      setError('Error generating song list. Please try again.');
    }
  };

  // Function to retry generating a song list
  const handleRetry = () => {
    // Here we'll call the OpenAI API again to generate a new song list
    // For now, let's use another mock song list
    const mockSongs = ['Song 4', 'Song 5', 'Song 6'];
    setSongs(mockSongs);
  };

  // Function to create a playlist from the song list
  const handleMakePlaylist = async () => {
    try {
      const url = await createPlaylist(songs);
      setPlaylistUrl(url);
      setError(''); // Clear any previous error messages
    } catch (error) {
      setError('Error creating playlist. Please try again.');
    }
  };

  // Render the components
  return (
    <div>
      <TopicInputForm onGenerate={handleGenerate} />
      {error && <p>{error}</p>}
      {songs.length > 0 && (
        <SongList
          songs={songs}
          onRetry={handleRetry}
          onMakePlaylist={handleMakePlaylist}
        />
      )}
      {playlistUrl && <a href={playlistUrl}>Open Playlist</a>}
    </div>
  );
};

export default App;

