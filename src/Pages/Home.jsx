import React from "react";
import PostsList from "../Components/Posts/PostsList";

const Home = () => {
  return (
    <section className="container">
      <h1 className="title">Tecnologia e Front-End</h1>
      <h2 className="subtitle">Mais recentes</h2>
      <PostsList />
    </section>
  );
};

export default Home;
