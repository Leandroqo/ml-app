import { screen } from "@testing-library/react";
import { api } from "lib/api";
import { item } from "mocks/handlers/items/response";
import { rest, server } from "mocks/server";
import { getPage } from "next-page-tester";

describe("Item Page", () => {
  it("should render item details", async () => {
    const { render } = await getPage({
      route: "/items/123"
    });

    render();

    expect(screen.getByText("Category A")).toBeInTheDocument();
    expect(screen.getByText("Category B")).toBeInTheDocument();
    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("3.000")).toBeInTheDocument();
    expect(screen.getByText("description...")).toBeInTheDocument();
  });

  it("should fail to render category in item details", async () => {
    server.use(
      rest.get(`${api}/categories/:id`, (req, res, ctx) => {
        return res(
          ctx.json({})
        )
      })
    );

    const { render } = await getPage({
      route: "/items/123"
    });

    render();

    expect(screen.queryByText("Category A")).not.toBeInTheDocument();
    expect(screen.queryByText("Category B")).not.toBeInTheDocument();
    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("3.000")).toBeInTheDocument();
    expect(screen.getByText("description...")).toBeInTheDocument();
  });

  it("should fail to render item gallery", async () => {
    server.use(
      rest.get(`${api}/items/:id`, (req, res, ctx) => {
        return res(
          ctx.status(400, "Bad Request")
        )
      })
    );

    const { render } = await getPage({
      route: "/items/123"
    });

    render();
    
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.queryByTestId("gallery")).not.toBeInTheDocument();
  });

  it("should fail to render item description", async () => {
    server.use(
      rest.get(`${api}/items/:id`, (req, res, ctx) => {
        return res(
          ctx.json(item)
        )
      }),
      rest.get(`${api}/items/:id/description`, (req, res, ctx) => {
        return res(
          ctx.status(400, "Bad Request")
        )
      })
    );

    const { render } = await getPage({
      route: "/items/123"
    });

    render();
   
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.queryByTestId("description")).not.toBeInTheDocument();
    expect(screen.queryByTestId("gallery")).toBeInTheDocument();
  });

  it("should fail to render item page", async () => {
    server.use(
      rest.get(`${api}/items/:id`, (req, res, ctx) => {
        return res(
          ctx.status(400, "Bad Request")
        )
      }),
      rest.get(`${api}/items/:id/description`, (req, res, ctx) => {
        return res(
          ctx.status(400, "Bad Request")
        )
      })
    );

    const { render } = await getPage({
      route: "/items/123"
    });

    render();
   
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.queryByTestId("description")).not.toBeInTheDocument();
    expect(screen.queryByTestId("gallery")).not.toBeInTheDocument();
  });
});