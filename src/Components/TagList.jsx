import React from "react";
import useFetch from "../Hooks/useFetch";
import API_GET from "../api";
import styles from "./TagList.module.css";
import Loading from "./Helpers/Loading";
import Error from "./Helpers/Error";
import { Link } from "react-router-dom";

const GET_TAGS = `
  query GetTags {
    tags {
      id
      name
    }
  }
`;

const TagList = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchTags() {
      const { url, options } = API_GET(GET_TAGS);
      const { json } = await request(url, options);
      if (json) console.log(json.data.tags);
    }
    fetchTags();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className={styles.tags}>
        {data.data.tags.map(({ id, name }) => (
          <li key={id}>
            <Link to="/">{name}</Link>
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default TagList;
