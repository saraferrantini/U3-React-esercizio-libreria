import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Componente Welcome", () => {
  it("mostra l'alert all'avvio", () => {
    //1)MONTAGGIO
    render(<Welcome />);
    //2)cercare un elemento con il ruolo "alert" nel documento
    const alert = screen.getByRole("alert");
    //3)cercare un elemento che contenga il testo "Welcome"
    const welcomeText = screen.getByText(/welcome/i);
    //4) RISULTATI ATTESI - expect verifica se l'alert è presente nel documento il test passerà.
    expect(alert).toBeInTheDocument();
    //5) assertion verifica se il testo "Welcome" è presente nell'alert. Se il testo è presente, il test passerà.
    expect(welcomeText).toBeInTheDocument();
  });
});
