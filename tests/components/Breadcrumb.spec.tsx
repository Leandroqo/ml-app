import { render, screen } from "@testing-library/react";
import { Category } from "lib/api";
import Breadcrumb from "components/Breadcrumb";

test("render breadcrumb component", () => {
  const categories: Category[] = [
    { id: "0", name: "Mercado" },
    { id: "1", name: "Livre" },
  ];

  const { container } = render(<Breadcrumb categories={categories} />);
  expect(container.querySelectorAll("li").length).toEqual(2);
  expect(screen.getByText("Mercado")).toBeInTheDocument();
  expect(screen.getByText("Livre")).toBeInTheDocument();
});
