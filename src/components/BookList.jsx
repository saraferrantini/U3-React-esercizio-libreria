import React, { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//☑️ GRIGLIA LIBRI A SINISTRA e AREA COMMENTI  A DESTRA - (Modifichiamo la struttura del componente BookList per includere sia la griglia dei libri che il componente CommentArea affiancati)

//☑️Queste modifiche consentono al componente BookList di gestire lo stato del libro selezionato e di comunicare questa
//informazione al CommentArea, assicurandosi che i commenti vengano visualizzati solo quando un libro è stato selezionato dall'utente.

class BookList extends Component {
  //1) STATO - È stata aggiunta una proprietà di stato selectedBookAsin per memorizzare l'asin del libro attualmente selezionato.
  //Questo stato viene utilizzato per tracciare quale libro è stato selezionato dall'utente.

  state = {
    selectedBookAsin: null, // Aggiunto lo stato per memorizzare l'asin del libro selezionato
  };

  //2) HANDLEBOOKSELECT - È stato aggiunto un metodo handleBookSelect che viene chiamato quando un libro viene selezionato.
  //  Questo metodo riceve l'asin del libro selezionato come parametro e aggiorna lo stato selectedBookAsin con questo valore.

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin }); // Aggiorna lo stato con l'asin del libro selezionato
  };

  //3)RENDER /RETURN - Nel metodo render, i componenti SingleBook e CommentArea vengono resi.
  //  La lista dei libri (SingleBook) è resa nella colonna di sinistra, mentre il CommentArea è reso nella colonna di destra solo se è stato selezionato un libro

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-md-6">
            {this.props.books.map((book) => (
              <SingleBook key={book.asin} book={book} onSelect={this.handleBookSelect} />
            ))}
          </div>
          <div className="col-md-6">
            {this.state.selectedBookAsin && <CommentArea asin={this.state.selectedBookAsin} />}{" "}
            {/* Mostra CommentArea solo se un libro è selezionato */}
          </div>
        </Row>
      </Container>
    );
  }
}

export default BookList;
