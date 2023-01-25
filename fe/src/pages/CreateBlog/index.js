import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Gap, TextArea, Upload } from "../../components";
import "./createBlog.css";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <div className="button-back">
        <Button title={"back"} onClick={() => navigate("/")} />
      </div>
      <form>
        <h3 className="create-title">Create New Blog Post</h3>
        <div className="title-create">
          <label htmlFor="title">Post Title</label>
          <input type="text" name="title" placeholder="Add Title" required />
        </div>
        <Upload />
        <TextArea />
        <Gap height={20} />
        <div className="button-action">
          <Button title="SAVE" />
        </div>
        <Gap height={20} />
      </form>
    </div>
  );
};

export default CreateBlog;
