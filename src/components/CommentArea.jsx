import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

//N.B
//asin è il codice identificativo del libro attualmente selezionato.
//prevAsin è il codice identificativo del libro precedente.

//1)☑️ USE -STATE abbiamo due variabili di stato: comments e prevAsin
//a)comments è inizializzato con un array vuoto, che rappresenta l'elenco dei commenti.
//b)prevAsin è inizializzato con null e rappresenta l'asin precedente.
const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [prevAsin, setPrevAsin] = useState(null);

  //2)☑️USE-EFFECT  viene utilizzata per effettuare la chiamata API quando cambia l'asin o quando il componente viene montato.
  useEffect(() => {
    //getComments è una funzione asincrona che recupera i commenti dal server.
    //getComments Viene chiamata all'interno di useEffect quando asin o prevAsin cambiano.
    const getComments = async () => {
      try {
        if (!asin) {
          console.error("Parametro asin non valido");
          return;
        }
        let response = await fetch(API_URL + asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTNjNjRjNTllYzAwMTk5MGQ2ZTMiLCJpYXQiOjE3MTA4NTcxNTcsImV4cCI6MTcxMjA2Njc1N30.SXZSGyInl3GHqU-D4uOZbfMrTItw8A4HsgWJZfoaK2I",
          },
        });
        if (response.ok) {
          let commentsData = await response.json();
          setComments(commentsData);
        } else {
          console.error("Errore durante la richiesta:", response.status);
        }
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    //3)☑️CONDIZIONE che controlla se l'asin attuale è diverso dal prevAsin, e se sì, chiama la funzione getComments()
    //per ottenere i commenti relativi al nuovo asin e aggiorna il valore di prevAsin con il nuovo asin
    if (asin && asin !== prevAsin) {
      getComments();
      setPrevAsin(asin);
    }

    //La funzione all'interno di useEffect viene eseguita ogni volta che asin o prevAsin cambiano.
  }, [asin, prevAsin]);

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(API_URL + commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTNjNjRjNTllYzAwMTk5MGQ2ZTMiLCJpYXQiOjE3MTA4NTcxNTcsImV4cCI6MTcxMjA2Njc1N30.SXZSGyInl3GHqU-D4uOZbfMrTItw8A4HsgWJZfoaK2I",
        },
      });

      if (response.ok) {
        setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
        console.log("Commento eliminato con successo:", commentId);
      } else {
        console.error("Errore durante la cancellazione del commento:", response.status);
      }
    } catch (error) {
      console.error("Errore durante la cancellazione del commento:", error);
    }
  };

  //4)☑️ return
  return (
    <div>
      {/*Al componente ADDCOMMENT viene passata una prop asin, che contiene il codice identificativo del libro attualmente selezionato. */}
      <AddComment asin={asin} />
      {/* Al componente COMMENTLIST viene passata una prop comments, che contiene l'array dei commenti relativi al libro attualmente selezionato. Viene anche passata una prop deleteComment, */}
      {/* che è la funzione utilizzata per eliminare un commento. Questo consente al componente CommentsList di visualizzare i commenti e di fornire un'opzione per eliminare ciascun commento. */}
      <CommentsList comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentArea;
