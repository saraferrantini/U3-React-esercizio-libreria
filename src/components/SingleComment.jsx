import React, { useState, useEffect } from "react";

//SINGLE-COMMENT = il componente SingleComment è utilizzato per mostrare ciascun commento all'interno della lista dei commenti.
const SingleComment = (props) => {
  //1)☑️USE STATE = Utilizziamo la funzione useState per definire lo stato click e la funzione setClick per aggiornare il valore di click.
  const [click, setClick] = useState(props.click);

  //2)☑️USE EFFECT = Utilizziamo la funzione useEffect per eseguire un'azione ogni volta che props.click cambia. Dentro l'effetto, aggiorniamo lo stato click con il nuovo valore di props.click.
  useEffect(() => {
    setClick(props.click);
  }, [props.click]);

  //3)☑️return
  return (
    //<p>All'interno di questo paragrafo, viene visualizzato il valore della variabile di stato click.
    //Quando il valore di click cambia, il componente verrà nuovamente renderizzato e il nuovo valore di click sarà mostrato nel paragrafo
    <div className="text-bg-dark">
      <p>{click}</p>
    </div>
  );
};

export default SingleComment;
