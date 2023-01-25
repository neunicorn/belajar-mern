import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import "./blogItem.css";

const BlogItem = () => {
  const navigation = useNavigate();
  return (
    <div className="blog-item" onClick={() => navigation("/detail-blog")}>
      <img className="img-thumb" src={RegisterBg} alt="thumbnail" />
      <div className="content-detail">
        <p className="title">Title</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          velit condimentum diam viverra hendrerit. Nunc nec ligula ut risus
          fringilla lacinia euismod sed leo. Nunc rhoncus lacus quis ipsum
          ultrices ornare.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
