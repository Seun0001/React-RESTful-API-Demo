import React from "react";
import Post from "./Post";

// PostList component to display a list of posts
export default function PostList({ posts, onEdit, onDelete }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
