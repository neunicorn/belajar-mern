import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import { Header, Footer } from "../../components";
import "./main-app.css";

const MainApp = () => {
  return (
    <div className="main-app-container">
      <div className="header-main-app">
        <Header />
      </div>
      <div className="content-main-app">
        <Routes>
          <Route exact path="/create-blog" element={<CreateBlog />} />
          <Route exact path="/detail-blog" element={<DetailBlog />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer-main-app">
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
