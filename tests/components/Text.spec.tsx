import { render, screen } from "@testing-library/react";
import Text from "../../components/Text";

test("render text component as Span", () => {
  const { container } = render(<Text.Span>message</Text.Span>);
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("render text component as H1", () => {
  const { container } = render(<Text.H1>message</Text.H1>);
  expect(container.querySelector("h1")).toBeInTheDocument();
});

test("render text component as H2", () => {
  const { container } = render(<Text.H2>message</Text.H2>);
  expect(container.querySelector("h2")).toBeInTheDocument();
});

test("render text component as P", () => {
  const { container } = render(<Text.P>message</Text.P>);
  expect(container.querySelector("p")).toBeInTheDocument();
});

test("render text component with size", () => {
  render(<Text.P size="14px">message</Text.P>);

  const textElement = screen.getByText("message");
  expect(textElement).toHaveClass("f14px");
});

test("render text component with size, color", () => {
  render(
    <Text.P size="16px" color="secondary">
      message
    </Text.P>
  );

  const textElement = screen.getByText("message");
  expect(textElement).toHaveClass("f16px");
  expect(textElement).toHaveClass("secondary");
});
