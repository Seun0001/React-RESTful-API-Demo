import React, { useState, useEffect } from "react";

// PostForm component for creating or updating a post
export default function PostForm({ currentPost, onSave }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Update form fields when the currentPost changes
  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={body}
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
