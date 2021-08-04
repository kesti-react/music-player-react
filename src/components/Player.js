import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  allSongs,
  setSongs,
}) => {
  useEffect(() => {
    const newSongsData = allSongs.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongsData);
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  /* Convert time to a  minute:second format */
  const formatTime = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const currentPercentage = Math.round(
      (Math.round(current) / Math.round(duration)) * 100
    );
    // console.log(currentPercentage);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: currentPercentage,
    });
  };

  const sliderDragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipSongHandler = async (direction) => {
    let currentIndex = allSongs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(allSongs[(currentIndex + 1) % allSongs.length]);
    }
    if (direction === "skip-back") {
      if (currentIndex - 1 < 0) {
        await setCurrentSong(allSongs[allSongs.length - 1]);
      } else {
        await setCurrentSong(allSongs[currentIndex - 1]);
      }
    }
    if(isPlaying){
      audioRef.current.play();
    }
  };

  const sliderAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const songEndHandler = async () => {
    let currentIndex = allSongs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(allSongs[(currentIndex + 1) % allSongs.length]);
    if(isPlaying){
      audioRef.current.play();
    }
    
  }

  return (
    <div className="Player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
        >
          <input
            onChange={sliderDragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={sliderAnimation} className="animate-track"></div>
        </div>

        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipSongHandler("skip-back")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("skip-forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.music}
      ></audio>
    </div>
  );
};

export default Player;
