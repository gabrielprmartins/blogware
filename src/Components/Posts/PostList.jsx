import React from "react";
import styles from "./PostList.module.css";
import { Link } from "react-router-dom";
import Date from "../Helpers/Date";

const PostList = ({ data }) => {
  return (
    <section className={`${styles.posts} animeUp`}>
      {data.posts.map(({ id, date, title, showcase, tags, slug }) => (
        <Link to={`/post/${slug}`} className={styles.post} key={id}>
          <Date date={date} />
          <h2>{title}</h2>
          <p>{showcase.text}</p>
          <ul className={styles.tags}>
            {tags.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Link>
      ))}
    </section>
  );
};

export default PostList;
