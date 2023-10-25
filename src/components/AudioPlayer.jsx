import { useRef } from 'react';

const AudioPlayer = ({ src, autoPlay }) => {
  const audioRef = useRef(null);

  // Play the audio when it's time to play
  if (autoPlay) {
    audioRef.current.play();
  }

  return (
    <audio controls ref={audioRef} src={src} style={{ display: 'none' }} />
  );
};

export default AudioPlayer;