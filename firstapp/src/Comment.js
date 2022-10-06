import React, { Component } from "react";
class Comment extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="ui container comment">
        <a href="#" className="avatar">
          <img src="#" alt="avatar" className="avatar" />
        </a>
        <div className="content">
          <a href="#" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
export default Comment;
