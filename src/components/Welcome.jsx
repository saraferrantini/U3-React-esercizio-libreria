// importo i css di bootstrap
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

// I)creo la funzione

const Welcome = () => {
  const [show, setShow] = useState(true);

  return (
    <Alert show={show} variant="success">
      <p>Welcome!!</p>
    </Alert>
  );
};

export default Welcome;
