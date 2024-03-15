// F)dobbiamo aggiungere gli IMPORT degli elementi di react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// A)creo la funzione

let MyFooter = function () {
  return (
    <Container fluid>
      <Row className="bg-dark text-white justify-content-center">
        <Col>
          <p className="my-3 text-center"> Copyright 2024, IVA 34689009766</p>
        </Col>
      </Row>
    </Container>
  );
};

// B) esporto
export default MyFooter;
// C)importo in app.js
