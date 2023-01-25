import React from "react";
import { xoxoLove } from "../../../assets";
import "./upload.css";

const Upload = () => {
  return (
    <div className="uploadImage">
      <img className="preview" src={xoxoLove} alt="upload" />
      <input type="file" />
    </div>
  );
};

export default Upload;
