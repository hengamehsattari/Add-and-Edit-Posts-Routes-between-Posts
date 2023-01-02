import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const url = "http://localhost:3001/posts";

const EditPost = () => {
  const navigate = useNavigate();
  const [SelectedPost, setSelectedPost] = useState({
    PostTitle: "",
    Author: "Choose Author's Name",
    Content: "",
  });
  const { PostTitle, Author, Content } = SelectedPost;
  const { postId } = useParams();

  useEffect(() => {
    fetch(`${url}/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedPost(data);
      });
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPost({ ...SelectedPost, [name]: value });
  };

  const EditPost = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SelectedPost),
    };
    fetch(`${url}/${postId}`, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/${postId}`));
  };

  return (
    <>
      <form className="editForm" onSubmit={(e) => EditPost(e)}>
        <h1>Edit Post</h1>
        <label>Post Title:</label>
        <input
          type="text"
          name="PostTitle"
          value={PostTitle}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Author</label>
        <select value={Author} name="Author" onChange={(e) => handleChange(e)}>
          <option value={"Choose Author's Name"} disabled>
            Choose Author's Name
          </option>
          <option value={"Michel"}>Michel</option>
          <option value={"John"}>John</option>
        </select>
        <label>Content</label>
        <textarea
          value={Content}
          name="Content"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button className="primaryButton">Edit Post</button>
      </form>
    </>
  );
};

export default EditPost;
