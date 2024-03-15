import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment, index) => (
          <li key={comment._id}>
            {comment.comment} | {comment.rate} | {comment.author}
            <button onClick={() => this.props.deleteComment(comment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentsList;
