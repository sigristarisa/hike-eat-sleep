import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../helpers/types";

interface props {
  blogpost: BlogPost;
}

const BlogPostItem: React.FC<props> = ({ blogpost }) => {
  return (
    <Link to={`/blog/${blogpost.uid}`}>
      <li className='grid-columns_two-extend-one'>
        <p>{blogpost.data.post_title[0].text}</p>
        <p>...</p>
      </li>
    </Link>
  );
};

export default BlogPostItem;
