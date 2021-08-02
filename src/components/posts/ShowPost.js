import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowPost = ({ postId }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPost;
