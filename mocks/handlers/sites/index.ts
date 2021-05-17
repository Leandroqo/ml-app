import { api } from 'lib/api';
import { rest } from "msw";
import { items } from "./response";

export default [
  rest.get(`${api}/sites/:locale/search`, (req, res, ctx) => {
    return res(
      ctx.json(items)
    )
  })
]