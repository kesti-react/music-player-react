import { useState } from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs,setSongs, setCurrentSong , audioRef, isPlaying, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            allSongs={songs}
            setSongs={setSongs}
            id = {song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef = {audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
