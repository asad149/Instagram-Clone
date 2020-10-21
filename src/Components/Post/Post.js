import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
const Post = forwardRef(({ imageUrl, username, caption }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src="/static/images/avatar/1.jpg" />
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt="" className="post__image" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
});

export default Post;
