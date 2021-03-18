import React from "react";

export default function PopupVid() {
  return ReactDOM.createPortal(
    <div className="popup-video" style={{ display: "none" }}>
      <div className="wrap">
        <div className="video-src" />
      </div>
      <div className="close" />
    </div>,
    document.getElementById("root2")
  );
}
