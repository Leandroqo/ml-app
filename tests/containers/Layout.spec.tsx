import { render, screen } from "@testing-library/react";
import Layout from "containers/Layout";
import { mockNextUseRouter } from "../../tests-utils/router";


test("render Layout container", () => {
  mockNextUseRouter("/");

  render(<Layout />);

  expect(screen.getByAltText("Mercado Livre")).toBeInTheDocument();
  expect(screen.getByTestId("input-search")).toBeInTheDocument();
  expect(screen.getByTestId("input-search-button")).toBeInTheDocument();
});

test("render Layout container with children", () => {
  mockNextUseRouter("/");

  render(
    <Layout>
      <span>render children</span>
    </Layout>
  );
  expect(screen.getByText("render children")).toBeInTheDocument();
});