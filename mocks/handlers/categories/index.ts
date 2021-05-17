import { api } from 'lib/api';
import { rest } from "msw";
import { categories } from "./response";

export default [
  rest.get(`${api}/categories/:id`, (req, res, ctx) => {
    return res(
      ctx.json(categories)
    )
  })
]