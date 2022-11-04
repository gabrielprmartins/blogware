import React from "react";
import Head from "../Components/Helpers/Head";
import PostFeed from "../Components/Posts/PostFeed";
import MainIcon from "../Assets/MainIcon";

const Home = () => {
  return (
    <section className="container animeUp">
      <Head title="Blogware" description="Blog de tecnologia e front-end" />

      <main className="main">
        <div>
          <h1 className="main-title">
            <span>Tecnologia</span>, <br /> Front-End & <br />
            <span>Desenvolvimento</span> <br /> de <span>Software</span>
          </h1>
          <p className="main-paragraph">
            Você programa? Seja <span>bem vindo(a)!</span>
          </p>
        </div>
        <figure>
          <MainIcon />
        </figure>
      </main>

      <h2 className="subtitle">Mais recentes</h2>
      <PostFeed />
    </section>
  );
};

export default Home;
