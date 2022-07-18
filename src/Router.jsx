import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import Tags from "./Pages/Tags";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/tags/:id" element={<Tags />} />
      <Route path="/post/:slug" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
