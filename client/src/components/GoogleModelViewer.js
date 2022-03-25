import React from "react";
import "./GoogleModelViewer.css";

import "@google/model-viewer/dist/model-viewer";

const GoogleModelViewer = ({user, project, format}) => {
  return (
    <div>
      <model-viewer
        src={`https://raw.githubusercontent.com/prajwalj27/ar-model-viewer/main/server/3d-models/${user}/${project}/scene.${format}`}
        ios-src=""
        poster=""
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </div>
  );
};

export default GoogleModelViewer;
