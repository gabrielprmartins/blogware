import React from "react";
import useFetch from "../Hooks/useFetch";
import API_GET from "../api";
import styles from "./TagList.module.css";
import Error from "./Helpers/Error";
import { NavLink } from "react-router-dom";

const GET_TAGS = `
  query GetTags {
    tags {
      id
      name
    }
  }
`;

const TagList = () => {
  const { data, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchTags() {
      const { url, options } = API_GET(GET_TAGS);
      request(url, options);
    }
    fetchTags();
  }, []);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className={styles.tags}>
        {data.data.tags.map(({ id, name }) => (
          <li key={id}>
            <NavLink to={`/tags/${id}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default TagList;
