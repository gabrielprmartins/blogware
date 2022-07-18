import React from "react";
import Head from "../Components/Head";
import PostFeed from "../Components/Posts/PostFeed";

const Home = () => {
  return (
    <section className="container animeUp">
      <Head title="Blogware" description="Blog de tecnologia e front-end" />

      <h1 className="title">Tecnologia e Front-End</h1>
      <h2 className="subtitle">Mais recentes</h2>
      <PostFeed />
    </section>
  );
};

export default Home;
