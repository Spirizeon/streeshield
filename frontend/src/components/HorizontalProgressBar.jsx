import React from "react";

const HorizontalProgressBar = ({ progress }) => {
  return (
    <div>
      <div style={{ width: "100%", position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "rgba(0,0,0,0.24)",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius:"8px"
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#E1AA05",
              transition: "width 0.1s",
              borderRadius:"8px"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
