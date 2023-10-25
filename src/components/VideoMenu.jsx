function VideoMenu({ sources, selectedSource, onSelectSource }) {
  return (
    <div className="scrollable-menu-container">
      <div className="menu-items">
        {sources.map((source, index) => (
          <div
            className={`menu-item ${index === selectedSource ? "active" : ""}`}
            key={index}
            onClick={() => onSelectSource(index)}
 
            
          >
            <img src={source.thumbnail} alt={source.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoMenu;