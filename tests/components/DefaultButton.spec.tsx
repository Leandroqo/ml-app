import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../components/Button";

test("render default button component", () => {
  const onClick = jest.fn();
  render(<Button.Default onClick={onClick}>Test</Button.Default>);
  const button = screen.getByText("Test");

  expect(button).toHaveClass("button");
  expect(button).toHaveClass("primary");
  expect(button).toHaveClass("large");
  userEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test("render default button as submit", () => {
  render(<Button.Default type="submit">Test</Button.Default>);
  const button = screen.getByText("Test");

  expect(button).toHaveAttribute("type", "submit");
});
