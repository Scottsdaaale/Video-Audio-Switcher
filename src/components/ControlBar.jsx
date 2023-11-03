import React from 'react';

const ControlBar = ({ toggleFullScreen, togglePause }) => {
  const buttonStyle = {
    background: 'purple',
    borderRadius: '50%', // Make it a circle
    width: '50px', // Set the width and height for the circle
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    marginRight: '10px'
  };

  return (
    <div
      className="mt-4 mb-4"
      style={{
        color: 'white',
        padding: '10px',
        borderRadius: '26px',
        background: 'rgba(0, 0, 0, 0.40)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={togglePause} style={buttonStyle}>
        ||
      </button>
      <button onClick={toggleFullScreen} style={buttonStyle}>
        [  ]
      </button>

      {/* Other control bar elements can be added here */}
    </div>
  );
};

export default ControlBar;
