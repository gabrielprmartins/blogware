import React from "react";
import { useParams } from "react-router-dom";
import API_GET from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import PostList from "./PostList";

const GET_POST_BY_TAG = `
  query GetPostByTag($id: ID) {
    posts(where: {tags_some: { id: $id }}) {
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

const PostsWithTag = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPostsByTag() {
      const { url, options } = API_GET(GET_POST_BY_TAG, { id });
      request(url, options);
    }
    fetchPostsByTag();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) return <PostList data={data.data} />;
  else return null;
};

export default PostsWithTag;
