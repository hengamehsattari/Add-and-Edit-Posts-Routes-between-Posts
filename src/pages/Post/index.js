import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../App.css";

const url = "http://localhost:3001/posts";

const Post = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(`${url}/${postId}`)
      .then((res) => res.json())
      .then((result) => setSinglePost(result));
  }, []);

  const { PostTitle, Author, Content } = singlePost;
  return (
    <div className="post">
      <h2>{PostTitle}</h2>
      <small>by: {Author}</small>
      <p>{Content}</p>
      <Link to={`editPost`} className="primaryButton">
        Edit Post
      </Link>
      <Link to={"/"} className="primaryButton">
        Back To Home Page
      </Link>
    </div>
  );
};

export default Post;
