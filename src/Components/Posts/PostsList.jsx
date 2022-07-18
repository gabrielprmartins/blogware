import React from "react";
import { Link } from "react-router-dom";
import API_GET from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import styles from "./PostsList.module.css";

const GET_POST_LIST = `
  query GetPostList {
    posts {
      id
      title
      date
      slug
      showcase {
        text
      }
      tags {
        id
        name
      }
    }
  }
`;

const PostsList = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { url, options } = API_GET(GET_POST_LIST);
      request(url, options);
    }
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className={styles.posts}>
        {data.data.posts.map(({ id, date, title, showcase, tags, slug }) => (
          <Link to={`/post/${slug}`} className={styles.post} key={id}>
            <span>{date}</span>
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
  else return null;
};

export default PostsList;
