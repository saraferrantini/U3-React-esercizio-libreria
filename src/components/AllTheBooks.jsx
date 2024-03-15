import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import items from "../books/fantasy.json";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {items.map((book, i) => {
          return (
            <Col xs={12} md={6} lg={3} className="my-3" key={book.asin}>
              <Card style={{ height: "100%" }}>
                <Card.Img variant="top" src={book.img} style={{ height: "15rem", objectFit: "contain" }} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}€</Card.Text>
                  <Button variant="dark">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
