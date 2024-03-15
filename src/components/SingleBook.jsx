import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = { selected: false };

  render() {
    const { asin, img, title, price } = this.props.book;

    return (
      <Col xs={12} md={6} lg={3} className="my-3" key={asin}>
        <Card>
          <Card.Img variant="top" src={img} style={{ height: "15rem", objectFit: "contain" }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}€</Card.Text>
            <Button
              variant="dark"
              style={{ border: this.state.selected ? "2px solid red" : "1px solid black", height: "100%" }}
              onClick={() => {
                this.setState({ selected: !this.state.selected });
              }}
            >
              Acquista
            </Button>
            {this.state.selected && <CommentArea asin={asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
