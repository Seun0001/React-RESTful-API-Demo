import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import PostForm from "./PostForm";
import "../App.css";

// App component to manage state and API calls
export default function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  // Fetch posts from API when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  const createPost = async (post) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    setPosts([response.data, ...posts]);
  };

  const updatePost = async (id, post) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      post
    );
    setPosts(posts.map((p) => (p.id === id ? response.data : p)));
    setCurrentPost(null);
  };

  const deletePost = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleSave = (post) => {
    if (currentPost) {
      updatePost(currentPost.id, post);
    } else {
      createPost(post);
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
  };

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <div className="App">
      <h1>React RESTful API Demo</h1>
      <PostForm currentPost={currentPost} onSave={handleSave} />
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
