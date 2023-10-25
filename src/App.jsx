import "./App.css";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "./components/VideoPlayer";
import VideoMenu from "./components/VideoMenu";
import AudioMenu from "./components/AudioMenu";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./Header";

import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import audio1 from "./assets/audio1.mp3";
import audio2 from "./assets/audio2.mp3";
import thumbnail1 from "./assets/thumbnail1.jpg";
import thumbnail2 from "./assets/thumbnail2.jpg";

function App() {
  const videoSources = [
    { title: "Video 1", src: video1, thumbnail: thumbnail1 },
    { title: "Video 2", src: video2, thumbnail: thumbnail2 },
  ];

  const audioSources = [
    { title: "Nature", src: audio1 },
    { title: "City", src: audio2 },
    { title: "Crack House", src: audio2 },
    { title: "Bathroom", src: audio2 },
    { title: "", src: audio2 },
    { title: "City", src: audio2 },
  ];

  const [selectedVideoSource, setSelectedVideoSource] = useState(0);
  const [selectedAudioSource, setSelectedAudioSource] = useState(0);

  const handleVideoChange = (index) => {
    setSelectedVideoSource(index);
  };

  const handleAudioChange = (index) => {
    setSelectedAudioSource(index);
  
    // Get the audio element by its ID
    const audioElement = document.getElementById('audioElement');
  
    // Check if the audio is currently playing
    if (audioElement.paused) {
      // Set the new audio source
      audioElement.src = audioSources[index].src;
      
      // Play the audio
      audioElement.play();
    } else {
      // If the audio is playing, pause it
      audioElement.pause();
    }
  };

  return (
    <Container fluid style={{ backgroundColor: '#151827' }}>
      <Header />
      <Row
        style={{
          backgroundColor: '#1b1d2c',
        }}
      >
        <Col lg={8}>
          <Row>
            <Col style={{ padding: '0px' }}>
              <VideoPlayer src={videoSources[selectedVideoSource].src} />
            </Col>
          </Row>
        </Col>
        <Col lg={4} style={{ padding: '0', backgroundColor: '#1c2232' }}>
          <div
            style={{
              padding: '15px',
              backgroundColor: '#151827',
              color: 'white',
            }}
          >
            Video
          </div>
          <Col style={{ margin: '15px' }}>
            <VideoMenu
              sources={videoSources}
              selectedSource={selectedVideoSource}
              onSelectSource={handleVideoChange}
            />
          </Col>
  
          <div
            style={{
              padding: '15px',
              backgroundColor: '#151827',
              color: 'white',
            }}
          >
            Audio
          </div>
          <Col style={{ margin: '15px' }}>
            <AudioMenu
              sources={audioSources}
              selectedSource={selectedAudioSource}
              onSelectSource={handleAudioChange}
            />
          </Col>
        </Col>
      </Row>
      <audio id="audioElement" controls style={{ display: 'none' }} />
    </Container>
  );
}

export default App;