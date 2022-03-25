import React, { useState } from "react";
import axios from "axios";
import "./Uploader.css";

const Uploader = ({ user, project, format }) => {
  const [modelFiles, setModelFiles] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setModelFiles(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const modelData = {
      modelFiles: modelFiles,
      fileName: fileName,
    };

    console.log(modelData);

    try {
      const res = await axios.post("http://localhost:3001/upload", modelData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="uploader">
      <h1>Upload 3D Model files</h1>
      <p>User - {user}</p>
      <p>Project - {project}</p>
      <p>Format - {format}</p>
      <form>
        <input
          type="file"
          onChange={saveFile}
          // multiple
          encType="multipart/form-data"
        />
        {/* <input type="file" multiple/> */}
        <button onClick={uploadFile}>Upload</button>
      </form>
      <br />
      <button>
        <a
          href={`http://localhost:3001/${user}/${project}/${format}`}
          target="_blank"
          style={{ "text-decoration": "none", color: "black" }}
        >
          Publish Project
        </a>
      </button>
    </div>
  );
};

export default Uploader;
