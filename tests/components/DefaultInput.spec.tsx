import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../../components/Input";

test("render default input component", () => {
  render(<Input.Default type="text" />);
  expect(screen.getByTestId("input-text")).toBeInTheDocument();
});

test("should trigger onChange", () => {
  const onChange = jest.fn();
  render(<Input.Default type="text" onChange={onChange} />);

  const input = screen.getByTestId("input-text");
  userEvent.type(input, "a");

  expect(onChange).toBeCalled();
});
