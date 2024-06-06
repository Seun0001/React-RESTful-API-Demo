import React from "react";

// Post component to display individual post details
export default function Post({ post, onEdit, onDelete }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}
