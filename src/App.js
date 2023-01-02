import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path=":postId" element={<Post />} />
        <Route path=":postId/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
