import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.asin,
  };

  postComment = async (e) => {
    e.preventDefault();
    let response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTNjNjRjNTllYzAwMTk5MGQ2ZTMiLCJpYXQiOjE3MTA0NDYxMzcsImV4cCI6MTcxMTY1NTczN30.ouFarp61WCm_nnFIcVeuCYIhS1KfOJokZZOwmSgxaSI",
      },
      body: JSON.stringify(this.state),
    });
    return response.json();
  };

  render() {
    return (
      <Form onSubmit={(e) => this.postComment(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={5}
            placeholder="0 - 5"
            onChange={(e) => this.setState({ rate: e.target.value })}
            value={this.state.rate}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Commenta
        </Button>
      </Form>
    );
  }
}

export default AddComment;
