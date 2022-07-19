import React from "react";
import styles from "./PostList.module.css";
import { Link } from "react-router-dom";
import Date from "../Helpers/Date";

const PostList = ({ data }) => {
  return (
    <section className={`${styles.posts} animeUp`}>
      {data.posts.map(({ id, date, title, showcase, tags, slug }) => (
        <Link to={`/post/${slug}`} className={styles.post} key={id}>
          <Date date={date} size={16} />
          <h2>{title}</h2>
          <p>{showcase.text}</p>
          <div className={styles.tags}>
            <ul>
              {tags.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default PostList;
