import React from "react";

const Head = ({ title, description }) => {
  React.useEffect(() => {
    if (title) document.title = title;
    else document.title = "Blogware";
    if (description) {
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) metaTag.setAttribute("content", description);
    }
  }, [title, description]);
  return null;
};

export default Head;
