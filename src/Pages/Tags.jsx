import React from "react";
import Head from "../Components/Head";
import PostsWithTag from "../Components/Posts/PostsWithTag";
import TagList from "../Components/TagList";

const Tags = () => {
  return (
    <section className="container animeUp">
      <Head
        title="Blogware | Tags"
        description="Selecione uma tag para achar o conteúdo desejado"
      />

      <h1 className="title">Tags</h1>
      <TagList />
      <PostsWithTag />
    </section>
  );
};

export default Tags;
