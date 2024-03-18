import React from "react";
import Card from "react-bootstrap/Card";

//☑️SELEZIONE DEL LIBRO - modifichiamo il  componente SingleBook per aggiungere la funzione di selezione del libro.

//1)DESTRUTTURAZIONE delle PROPS: Le props passate al componente SingleBook vengono destrutturate per ottenere direttamente i valori di book e onSelect.
function SingleBook(props) {
  const { book, onSelect } = props;

  //2)FUNZIONE HANDLECLICK -
  //Gestione del click: Viene dichiarata la funzione handleClick, che viene chiamata quando l'utente fa clic sul componente SingleBook.
  //Questa funzione chiama la funzione onSelect (che è stata passata come prop) con l'asin del libro corrente come argomento.
  const handleClick = () => {
    onSelect(book.asin);
  };

  //3)Renderizzazione della carta del libro: Viene restituito il componente Card di Bootstrap con i dettagli del libro
  //impostato l'evento onClick su questo componente, in modo che quando l'utente fa clic su di esso, venga chiamata la funzione handleClick.
  return (
    <Card style={{ width: "18rem", margin: "10px" }} onClick={handleClick}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
