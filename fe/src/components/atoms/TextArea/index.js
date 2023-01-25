import React from "react";
import "./textarea.css";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea placeholder="Add Blog Content" {...rest} />
    </div>
  );
};

export default TextArea;
