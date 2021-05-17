import sites from "./handlers/sites";
import items from "./handlers/items";
import categories from "./handlers/categories";

export const handlers = [
  ...sites,
  ...items,
  ...categories
];