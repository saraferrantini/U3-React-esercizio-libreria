import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [prevAsin, setPrevAsin] = useState(null);

  useEffect(() => {
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

    if (asin && asin !== prevAsin) {
      getComments();
      setPrevAsin(asin);
    }
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

  return (
    <div>
      <AddComment asin={asin} />
      {/* Aggiunta dell'attributo data-testid all'elemento <ul> */}
      <ul data-testid="comments-list">
        <CommentsList comments={comments} deleteComment={deleteComment} />
      </ul>
    </div>
  );
};

export default CommentArea;
