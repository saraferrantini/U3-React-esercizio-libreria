import React from "react";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function BookList(props) {
  return (
    <Container fluid>
      <Row>
        {props.books.map(function (book) {
          return <SingleBook key={book.asin} book={book} />;
        })}
      </Row>
    </Container>
  );
}

export default BookList;
