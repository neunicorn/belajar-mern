import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import { Header, Footer } from "../../components";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/create-blog" element={<CreateBlog />} />
        <Route exact path="/detail-blog" element={<DetailBlog />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainApp;
