import React from "react";
import API_GET from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import PostList from "./PostList";

const GET_POST_LIST = `
  query GetPostList {
    posts (orderBy: publishedAt_ASC) {
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

const PostFeed = () => {
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
  if (data) return <PostList data={data.data} />;
  else return null;
};

export default PostFeed;
