import React, { useRef, useState, useEffect } from 'react';
import ControlBar from './ControlBar';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // State to track video pause/play state
  const [isFullscreen, setIsFullscreen] = useState(false); // State to track fullscreen state
  const videoStyle = {
    width: '100%', 
    height: '100%', 
    borderRadius: '15px',
  };

  const toggleFullScreen = () => {
    const videoElement = videoRef.current;

    if (!isFullscreen) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const togglePause = () => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      if (isPaused) {
        videoElement.play(); // Play the video if it's paused
      } else {
        videoElement.pause(); // Pause the video if it's playing
      }
      setIsPaused(!isPaused); // Toggle the state
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} controls={false} autoPlay loop muted src={src} style={videoStyle} />
      <ControlBar toggleFullScreen={toggleFullScreen} togglePause={togglePause} isFullscreen={isFullscreen} />    
    </div>
  );
};

export default VideoPlayer;
