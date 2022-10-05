import React from "react";

const FComment = () => {
  return (
    <div className="ui container comment">
      <a href="#" className="avatar">
        <img src="#" alt="avatar" className="avatar" />
      </a>
      <div className="content">
        <a href="#" className="author">
          Author
        </a>
        <div className="metadata">
          <span className="date">Today at 19:00</span>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  );
};

export default FComment;
