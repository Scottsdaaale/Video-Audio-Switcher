const VideoPlayer = ({ src }) => {
    const videoStyle = {
      width: '100%', 
      height: '100%', 
      borderRadius: '15px',
      // paddingTop: "10px",
      // paddingBottom: "20px",
      // paddingRight: "20px",
      // paddingLeft: "20px",
    };
  
    return <video controls={false} autoPlay loop muted src={src} style={videoStyle} />;
  };

export default VideoPlayer;