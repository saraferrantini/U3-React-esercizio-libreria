import { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <div className="text-bg-dark">
        <p>{this.props.click}</p>
      </div>
    );
  }
}

export default SingleComment;
