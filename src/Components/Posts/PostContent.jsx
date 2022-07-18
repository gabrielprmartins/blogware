import React from "react";
import styles from "./PostContent.module.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import API_GET from "../../api";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String) {
    post(where: {slug: $slug}) {
      date
      title
      tags {
        id
        name
      }
      content {
        html
      }
    }
  }
`;

const PostContent = () => {
  const { slug } = useParams();
  const postContent = React.useRef();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPost() {
      const { url, options } = API_GET(GET_POST_BY_SLUG, { slug });
      const { response, json } = await request(url, options);
      if (response.ok) {
        parseToHTML(json.data.post.content.html);
      }
    }
    fetchPost();
  }, [slug]);

  function parseToHTML(string) {
    if (postContent.current && string) {
      postContent.current.innerHTML = string;
    }
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <div className={styles.postTitle}>
          <h1 className="title">{data.data.post.title}</h1>
          <div className={styles.postInfo}>
            <span>{data.data.post.date}</span>
            <ul className={styles.tags}>
              {data.data.post.tags.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.content} ref={postContent}>
          {parseToHTML(data.data.post.content.html)}
        </div>

        <div className={styles.goToRecentPosts}>
          <Link to="/">← Voltar para posts recentes</Link>
        </div>
      </>
    );
  else return null;
};

export default PostContent;
