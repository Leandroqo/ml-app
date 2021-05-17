import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../../components/Input";

test("render search input component", () => {
  render(<Input.Search />);
  expect(screen.getByTestId("input-search")).toBeInTheDocument();
});

test("should click on button", () => {
  const onClick = jest.fn();
  render(<Input.Search onClick={onClick} />);

  const input = screen.getByText("Buscar");
  userEvent.click(input);

  expect(onClick).toBeCalled();
});
