import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = ({ asin }) => {
  //1) ☑️USE- STATE per definire tre stati: comment, rate ed elementId
  //Inizializziamo i valori di default di comment e rate come stringhe vuote e elementId utilizzando la prop asin (codice identificativo del libro attualmente selezionato)
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState(asin);

  //2)☑️USE-EFFECT per aggiornare elementId quando asin cambia.
  //Quando la prop asin cambia, il valore di elementId verrà aggiornato di conseguenza.
  useEffect(() => {
    setElementId(asin);
  }, [asin]);

  //3)☑️FETCH - funzione che gestisce l'invio del commento al server quando il modulo viene inviato.
  ///Quando il modulo viene inviato, viene eseguita una richiesta POST all'API, includendo nel corpo della richiesta i valori correnti di comment, rate ed elementId.
  const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTNjNjRjNTllYzAwMTk5MGQ2ZTMiLCJpYXQiOjE3MTA4NTcxNTcsImV4cCI6MTcxMjA2Njc1N30.SXZSGyInl3GHqU-D4uOZbfMrTItw8A4HsgWJZfoaK2I",
        },

        //comment, rate, elementId
        body: JSON.stringify({ comment, rate, elementId }),
      });
      if (response.ok) {
        // Handle success
        console.log("Comment posted successfully");
      } else {
        // Handle error
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //4)☑️ Utilizziamo i componenti Form, Form.Group e Button di react-bootstrap per costruire il modulo
  /////Utilizziamo i valori degli stati comment e rate come valori dei campi di input e aggiorniamo gli stati utilizzando i relativi setter setComment e setRate quando vengono modificati.

  return (
    <Form onSubmit={postComment}>
      <Form.Group className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your comment"
          value={comment} //comment
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="number"
          min={0}
          max={5}
          placeholder="0 - 5"
          onChange={(e) => setRate(e.target.value)}
          value={rate} //rate
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Commenta
      </Button>
    </Form>
  );
};

export default AddComment;
