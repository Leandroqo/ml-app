import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { api } from "lib/api";
import { rest, server } from "mocks/server";
import { getPage } from "next-page-tester";

describe("Items Page", () => {
  it("should render a empty list", async () => {
    const { render } = await getPage({
      route: "/items"
    });

    render();
    expect(screen.getByTestId("page-section")).toBeEmptyDOMElement();
  });

  it("should render a list", async () => {
    const { render } = await getPage({
      route: "/items?search=query"
    });

    render();
  
    expect(screen.getAllByTestId("item")).toHaveLength(1);
    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByTestId("state")).toHaveTextContent("São Paulo");
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByTestId("price")).toHaveTextContent("3.000");
  });

  it("should click on item", async () => {
    const { render } = await getPage({
      route: "/items?search=query"
    });

    render();

    const [item] = await screen.findAllByTestId("item");
    userEvent.click(item);

    await waitFor(() => expect(screen.queryByText("description...")).toBeInTheDocument());
  });

  it("should fail to render page", async () => {
    server.use(
      rest.get(`${api}/sites/:locale/search`, (req, res, ctx) => {
        return res(
          ctx.status(400, "Bad Request")
        )
      })
    );

    const { render } = await getPage({
      route: "/items?search=query"
    });

    render();

    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

});