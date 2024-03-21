import { render, screen } from "@testing-library/react";
import App from "../App";

//1)sostituisco test con it
it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/react testing lecture/i);
  expect(linkElement).toBeInTheDocument();
});
