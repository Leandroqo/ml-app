import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { getPage } from "next-page-tester";

describe("Home Page", () => {
  it("should render a empty list", async () => {
    const { render } = await getPage({
      route: "/"
    });

    render();
    expect(screen.getByTestId("page-section")).toBeEmptyDOMElement();
  });

  it("should search by item", async () => {
    const { render } = await getPage({
      route: "/"
    });

    render();
    const input = screen.getByPlaceholderText("Nunca deixe de buscar");
    const button = screen.getByText("Buscar");
    userEvent.type(input, "query");
    userEvent.click(button);

    await waitFor(() => expect(screen.queryByText("Produto 1")).toBeInTheDocument());
  });
});