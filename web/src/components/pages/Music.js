import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    url: "https://soundcloud.com/toosii2x/toosii-favorite-song?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const Music = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevClick = () => {
    if (currentSongIndex === 0) {
      setCurrentSongIndex(songs.length - 1);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSongIndex === songs.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handleSongEnd = () => {
    if (currentSongIndex === songs.length - 1) {
      setCurrentSongIndex(0);
      setIsPlaying(false);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const currentSong = songs[currentSongIndex];

  return (
    <div className="music-player">
      <div className="song-info">
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.url}
        onEnded={handleSongEnd}
        autoPlay={isPlaying}
      />
      <div className="controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Music;
