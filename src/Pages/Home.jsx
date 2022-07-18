import React from "react";
import PostFeed from "../Components/Posts/PostFeed";

const Home = () => {
  return (
    <section className="container">
      <h1 className="title">Tecnologia e Front-End</h1>
      <h2 className="subtitle">Mais recentes</h2>
      <PostFeed />
    </section>
  );
};

export default Home;
