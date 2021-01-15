import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './audio-player.css';

const AudioPlayer = ({ audioFile, autoPlayState }) => {
  return (
    <div>
      <ReactAudioPlayer 
        src={audioFile}
        controls
        controlsList="nodownload"
        autoPlay={autoPlayState}
      />
    </div>
  );
};

export default AudioPlayer;
