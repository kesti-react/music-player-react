const LibrarySong = ({
  song,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  allSongs,
  id,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    /* change active state to songs */
    const newSongsData = allSongs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongsData);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
