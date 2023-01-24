import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.css";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="img-thumb" src={RegisterBg} alt="thumbnail" />
      <div className="content-detail">
        <p className="title">Title</p>
        <p className="author">Author - Date post</p>
        <p className="body">lorem ipsum sidolor amet</p>
      </div>
    </div>
  );
};

export default BlogItem;
