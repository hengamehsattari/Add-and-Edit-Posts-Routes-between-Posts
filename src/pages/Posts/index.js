import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";

import React from "react";

const Posts = ({ data }) => {
  return (
    <>
      <h1>
        <AiOutlineArrowDown>Posts</AiOutlineArrowDown>
      </h1>
      <div className="postsContainer">
        {data.map((post) => (
          <div key={post.id} className="postBody">
            <h2>{post.PostTitle}</h2>
            <span>by: {post.Author}</span>
            <p>{post.Content.substring(0, 20)}</p>
            <Link to={`${post.id}`} className="primaryButton">
              View Post
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
