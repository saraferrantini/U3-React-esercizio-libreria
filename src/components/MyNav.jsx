// 4)dobbiamo aggiungere gli IMPORT degli elementi di react bootstrap

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// 1)creo la funzione per creare il componente
let MyNav = function (props) {
  return (
    // qui dentro inserisco la navbar e la modifico
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Libri: {props.subtitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* PER SPOSTARE IL MENù A DESTRA */}
          <Nav className="ms-auto">
            <Nav.Link href="#menu">Letti</Nav.Link>
            <Nav.Link href="#booking">Da leggere</Nav.Link>
            <Nav.Link href="#contacts">Suggeriti</Nav.Link>
            <Nav.Link href="#about">Recensioni</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// 2)esporto
export default MyNav;
// 3)importo in App.js (lo fai uan volta sola)
// 4)importo il css di bootstrap(in app.js)
