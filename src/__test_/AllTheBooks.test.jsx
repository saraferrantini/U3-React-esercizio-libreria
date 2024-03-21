import React from "react";
import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";

describe("AllTheBooks component", () => {
  //  // Definizione di alcuni libri fittizi per il test
  const mockBooks = [
    {
      asin: "1234567890",
      title: "Test Book 1",
      img: "https://example.com/test1.jpg",
      price: 9.99,
    },
    {
      asin: "0987654321",
      title: "Test Book 2",
      img: "https://example.com/test2.jpg",
      price: 12.99,
    },
  ];
  it("renders a card for each book", () => {
    //si occupa di renderizzare il componente AllTheBooks, passando come props la lista di libri fittizi mockBooks.
    // Questo consente di testare il comportamento del componente quando riceve una determinata lista di libri come input.
    render(<AllTheBooks items={mockBooks} />);

    // Verifica che il titolo di ciascun libro sia presente nel documento
    mockBooks.forEach((book) => {
      const titleElement = screen.getByRole("heading", { name: new RegExp(book.title, "i") });
      expect(titleElement).toBeInTheDocument();
    });

    // Verifica che l'immagine di ciascun libro sia presente nel documento
    mockBooks.forEach((book) => {
      const imageElement = screen.getByAltText(new RegExp(book.title, "i"));
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", book.img); // Verifica che l'attributo 'src' corrisponda all'URL dell'immagine
    });

    // Verifica che il prezzo di ciascun libro sia presente nel documento
    mockBooks.forEach((book) => {
      const priceElement = screen.getByText(new RegExp(`${book.price}€`, "i"));
      expect(priceElement).toBeInTheDocument();
    });

    // Verifica che il pulsante "Acquista" di ciascun libro sia presente nel documento
    mockBooks.forEach((book) => {
      const buttonElement = screen.getByRole("button", { name: /Acquista/i });
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
