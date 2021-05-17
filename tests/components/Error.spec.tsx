import { render, screen } from "@testing-library/react";
import Error from "components/Error";

test("render error with default props", () => {
  render(<Error />);

  expect(screen.getByText("Desculpe não foi possível carregar o recurso. Tente mais tarde!"));
  expect(screen.getByTestId("error")).toBeInTheDocument();
});

test("render error with custom message", () => {
  render(<Error id="custom-error-id" message="Custom message error" />);

  expect(screen.getByText("Custom message error"));
  expect(screen.getByTestId("custom-error-id"));
});
