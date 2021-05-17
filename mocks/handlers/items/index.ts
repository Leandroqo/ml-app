import { api } from 'lib/api';
import { rest } from "msw";
import { description, item } from "./response";

export default [
  rest.get(`${api}/items/:id`, (req, res, ctx) => {
    return res(
      ctx.json(item)
    )
  }),
  rest.get(`${api}/items/:id/description`, (req, res, ctx) => {
    return res(
      ctx.json(description)
    )
  })
]