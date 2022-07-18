import React from "react";
import PostsWithTag from "../Components/Posts/PostsWithTag";
import TagList from "../Components/TagList";

const Tags = () => {
  return (
    <section className="container">
      <h1 className="title">Tags</h1>
      <TagList />
      <PostsWithTag />
    </section>
  );
};

export default Tags;
