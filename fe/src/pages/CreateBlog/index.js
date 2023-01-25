import React from "react";
import { Button, Gap, TextArea, Upload } from "../../components";
import "./createBlog.css";

const CreateBlog = () => {
  return (
    <div className="blog-post">
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
