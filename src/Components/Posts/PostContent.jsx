import React from "react";
import styles from "./PostContent.module.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import API_GET from "../../api";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import Head from "../Head";

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String) {
    post(where: {slug: $slug}) {
      date
      title
      showcase {
        text
      }
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
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPost() {
      const { url, options } = API_GET(GET_POST_BY_SLUG, { slug });
      request(url, options);
    }
    fetchPost();
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <Head
          title={data.data.post.title}
          description={data.data.post.showcase.text}
        />
        <div className={styles.postTitle}>
          <h1 className="title">{data.data.post.title}</h1>
          <div className={styles.postInfo}>
            <span>{data.data.post.date}</span>
            <ul className={styles.tags}>
              {data.data.post.tags.map(({ id, name }) => (
                <li key={id}>
                  <Link to={`/tags/${id}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.data.post.content.html }}
        />

        <div className={styles.goToRecentPosts}>
          <Link to="/">← Voltar para posts recentes</Link>
        </div>
      </>
    );
  else return null;
};

export default PostContent;
