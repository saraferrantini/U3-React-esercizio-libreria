import React from "react";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("CommentArea", () => {
  it("renderizza CommentArea correttamente", () => {
    //Montaggio
    render(<CommentArea />);

    // Verifica che il componente CommentArea sia renderizzato correttamente
    expect(screen.getByRole("textbox")).toBeInTheDocument(); // Verifica che AddComment contenga un textarea
    expect(screen.getByTestId("comments-list")).toBeInTheDocument(); // Verifica che CommentsList abbia un data-testid="comments-list"
  });
});
