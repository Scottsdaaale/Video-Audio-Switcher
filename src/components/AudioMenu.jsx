import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"; // Import useState

function AudioMenu({ sources, selectedSource, onSelectSource }) {
  const [clickedIndex, setClickedIndex] = useState(null); // State to track clicked item

  return (
    <div className="scrollable-menu-container-audio">
      {sources.map((source, index) => (
        <div
          className={`menu-item ${index === selectedSource ? "active" : ""}`}
          onClick={() => {
            onSelectSource(index);
            setClickedIndex(index); // Update state when item is clicked
          }}
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#161825",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: clickedIndex === index ? "red" : "#007bff", // Change color conditionally
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <FontAwesomeIcon icon={faMicrophone} style={{ color: "white" }} />
          </div>
          <span
            style={{
              color: "white",
              textAlign: "left",
              width: "100%",
            }}
          >
            {source.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AudioMenu;