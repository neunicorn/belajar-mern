import React from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="create-blog-wrapper">
        <Button title="CREATE BLOG" />
      </div>
      <Gap height={20} />
      <div className="blog-content">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="PREVIOUS" />
        <Gap width={20} />
        <Button title="NEXT" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
