import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, MainApp, NoMatch } from "../../pages";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/*" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
