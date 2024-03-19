import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";

//il componente COMMENT LIST mostra una lista di commenti, e ciascun commento include il testo del commento, l'autore, insieme a un pulsante "Delete" per eliminare il commento corrispondente.
const CommentsList = (props) => {
  //1)☑️USE-STATE viene utilizzato per gestire lo stato dei commenti.
  const [comments, setComments] = useState([]);

  //2)☑️useEffect viene utilizzato per aggiornare lo stato dei commenti ogni volta che props.comments cambia.
  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  //3)☑️FUNZIONE che rimuove il commento dalla lista dei commenti. Questa funzione aggiorna lo stato dei commenti.
  //Riceve come argomento l'ID del commento che si desidera eliminare.
  const deleteComment = (id) => {
    //metodo filter sull'array comments per creare un nuovo array updatedComments che contiene tutti i commenti tranne quello con l'ID specificato.
    //Questo è fatto utilizzando una funzione di callback passata a filter che restituisce true solo per i commenti il cui ID è diverso da quello specificato.
    const updatedComments = comments.filter((comment) => comment._id !== id);
    //Aggiorna lo stato dei commenti chiamando setComments con il nuovo array di commenti aggiornato.
    setComments(updatedComments);
    //Chiama props.deleteComment(id) per notificare alla componente genitore che un commento è stato eliminato, in modo che questa possa eventualmente eseguire altre azioni relative all'eliminazione del commento
    props.deleteComment(id);
  };

  //4)☑️RETURN
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={comment._id}>
          {comment.comment} | {comment.rate} | {comment.author}
          {/* //Gli eventi onClick ora chiamano deleteComment con l'ID del commento da eliminare. */}
          <button onClick={() => deleteComment(comment._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
