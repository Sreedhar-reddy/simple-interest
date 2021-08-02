import React, { useState } from "react";
import ShowPost from "./ShowPost";

const PostControl = () => {
  const [post, setPost] = useState(1);
  return (
    <div>
      <select
        onChange={(e) => {
          setPost(e.target.value);
        }}
        value={post}
      >
        <option value="">select post</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <ShowPost postId={post} />
    </div>
  );
};
export default PostControl;
