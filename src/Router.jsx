import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Tags from "./Pages/Tags";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tags" element={<Tags />} />
    </Routes>
  );
};

export default Router;
