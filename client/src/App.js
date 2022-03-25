import React, { useState } from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";
import QRCode from "react-qr-code";
import GoogleModelViewer from "./components/GoogleModelViewer";
import Uploader from "./components/Uploader";
import CreateProject from "./components/CreateProject";

export default function App() {
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");
  const [format, setFormat] = useState("");

  return (
    <div className="container">
      <div>
        <CreateProject user={user} project={project} setUser={setUser} setProject={setProject} setFormat={setFormat} />
        <Uploader user={user} project={project} format={format} />
      </div>
      <GoogleModelViewer user={user} project={project} format={format} />
      {/* <h1>Model</h1>
      <AFrameModel /> */}
      {/* <QRCode value="https://twitter.com/prajwalj27" /> */}
    </div>
  );
}
