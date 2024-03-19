import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// funzione BookList che accetta un oggetto di props. Le props includeranno un array di libri (books) che passeremo al componente.
const BookList = ({ books }) => {
  //1)☑️USE-STATE = dichiararIAMO uno stato locale chiamato selectedBookAsin, (che conterrà l'ASIN del libro attualmente selezionato)
  //useState(null) inizializza selectedBookAsin a null, indicando che inizialmente nessun libro è selezionato.
  //La funzione setSelectedBookAsin sarà utilizzata per aggiornare questo stato.
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  //2)☑️USE-EFFECT = Effetto collaterale per il cambio di lista di libri
  //useEffect per eseguire un'azione ogni volta che books cambia. In questo caso, vogliamo reimpostare il libro selezionato a null quando cambia l'elenco dei libri.
  useEffect(() => {
    // Imposta il primo libro come selezionato di default
    if (books.length > 0 && !selectedBookAsin) {
      setSelectedBookAsin(books[0].asin);
    }

    //- books: Questo è l'array di libri che passiamo come prop al componente BookList.
    ////(Quando questo array cambia,(esempio quando vengono aggiunti o rimossi libri), vogliamo che l'effetto venga eseguito)

    //-selectedBookAsin: Questo è lo stato che abbiamo definito utilizzando useState per tenere traccia del libro attualmente selezionato
  }, [books, selectedBookAsin]);

  //3)☑️fUNZIONE che accetta l'ASIN del libro come argomento. Quando viene chiamata, imposta lo stato selectedBookAsin con l'ASIN del libro selezionato.
  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  //4)☑️RETURN - qui stiamo renderizzando il componente
  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {books.map((book) => (
              <SingleBook key={book.asin} book={book} onSelect={handleBookSelect} />
            ))}
          </div>
        </Col>
        <Col md={3}>
          {/* //Nel secondo div, renderizziamo il componente CommentArea solo se selectedBookAsin è diverso da null. Ciò assicura che CommentArea venga visualizzato solo se un libro è stato selezionato. */}
          {/* Mostra CommentArea solo se un libro è selezionato */}
          {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
