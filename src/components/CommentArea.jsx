import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

// ☑️il componente CommentArea si occupa di gestire i commenti relativi a un libro, consentendo all'utente di aggiungere nuovi commenti, visualizzare i commenti esistenti e eliminarli.

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

//1)STATO - È stato aggiunto uno stato locale al componente per memorizzare i commenti recuperati dal server (comments) e l'asin del libro precedente (prevAsin).
// Questo permette di tracciare eventuali cambiamenti nell'asin del libro selezionato.
class CommentArea extends Component {
  state = {
    comments: [],
    prevAsin: null, // Aggiunto lo stato per memorizzare l'asin precedente
  };

  //2) FETCH -  la funzione getComments è responsabile per il recupero dei commenti relativi all'asin del libro selezionato dal server.
  getComments = async () => {
    try {
      //const { asin } = this.props;: Qui viene destrutturata la prop asin dal props del componente. Questa prop rappresenta l'asin del libro corrente.
      const { asin } = this.props;
      // Questa condizione verifica se l'asin del libro è valido. Se asin è nullo o non definito, viene emesso un messaggio di errore tramite console.error e la funzione viene interrotta.
      if (!asin) {
        console.error("Parametro asin non valido");
        return;
      }
      //viene effettuata una richiesta GET al server API utilizzando l'endpoint corrispondente all'asin del libro. L'URL completo della richiesta viene formato concatenando API_URL e l'asin del libro.
      let response = await fetch(API_URL + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTVkYTRjNTllYzAwMTk5MGQ3MmEiLCJpYXQiOjE3MTA0MTY2NjMsImV4cCI6MTcxMTYyNjI2M30.pvfes2FP1iRg4GHdSLyIg94si5qm6YBibaykPNHEuQg",
        },
      });
      // se la risposta alla richiesta è "OK" (status 200). Se la risposta è positiva, i commenti ricevuti vengono convertiti in formato JSON e salvati nello stato del componente utilizzando setState.
      //  In caso contrario, viene emesso un messaggio di errore tramite console.error
      if (response.ok) {
        let commentsData = await response.json();
        this.setState({ comments: commentsData });
        console.log(response);
      } else {
        console.error("Errore durante la richiesta::", response.status);
      }

      //cattura eventuali errori che si verificano durante il recupero dei commenti o la conversione della risposta in formato JSON.
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  //3)COMPONENTDIDUPDATE
  //viene chiamato ogni volta che il componente viene aggiornato.
  //Viene utilizzato qui per controllare se l'asin del libro attualmente selezionato (this.props.asin) è diverso dall'asin precedente memorizzato nello stato.

  //Se l'asin è cambiato, significa che è stato selezionato un nuovo libro, quindi vogliamo ottenere i commenti relativi a questo nuovo libro.
  //Viene chiamata la funzione getComments() per ottenere i nuovi commenti e viene aggiornato lo stato prevAsin con l'asin corrente.

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin || prevState.prevAsin !== this.props.asin) {
      // Aggiunto il controllo sull'asin precedente
      this.getComments();
      this.setState({ prevAsin: this.props.asin }); // Aggiorna lo stato con l'asin corrente
    }
  }

  // 4)FETCH DELETE - era già presente per cancellare il commento.
  //per eliminare un commento dal server. Riceve come parametro l'id del commento che si desidera eliminare.
  deleteComment = async (commentId) => {
    try {
      const response = await fetch(API_URL + commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTNjNjRjNTllYzAwMTk5MGQ2ZTMiLCJpYXQiOjE3MTA0NDYxMzcsImV4cCI6MTcxMTY1NTczN30.ouFarp61WCm_nnFIcVeuCYIhS1KfOJokZZOwmSgxaSI",
        },
      });

      if (response.ok) {
        // Rimuovi il commento dalla lista dei commenti nello stato
        this.setState((prevState) => ({
          comments: prevState.comments.filter((comment) => comment._id !== commentId),
        }));
        console.log("Commento eliminato con successo:", commentId);
      } else {
        console.error("Errore durante la cancellazione del commento:", response.status);
      }
    } catch (error) {
      console.error("Errore durante la cancellazione del commento:", error);
    }
  };

  //5)All'interno di questo metodo, viene reso il componente AddComment passando l'asin del libro corrente come prop.
  //Viene anche reso il componente CommentsList, passando la lista dei commenti attualmente memorizzata nello stato del componente e la funzione deleteComment per consentire all'utente di eliminare i commenti.

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentsList comments={this.state.comments} deleteComment={this.deleteComment} />
      </div>
    );
  }
}

export default CommentArea;
