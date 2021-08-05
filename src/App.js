import Player from "./components/Player";
import Song from "./components/Song";
import Nav from "./components/Nav";


import Library from "./components/Library";
import { useState,useRef } from "react";
import "./styles/app.scss";
import data from "./data";

function App() {

  /* useRef to reference to the audio */
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false); // close at first


  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });




 

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`} >
      <Nav  setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus}/>
      <Song currentSong={currentSong}  isPlaying={isPlaying}/>
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}

        allSongs = {songs}
        setSongs={setSongs}

        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        
        audioRef = {audioRef}
        
        songInfo={songInfo}
        setSongInfo = {setSongInfo}
        
      />
      <Library libraryStatus={libraryStatus} audioRef = {audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs}/>

      
    </div>
  );
}

export default App;
