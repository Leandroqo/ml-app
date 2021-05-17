import { getCategoriesById } from "lib/api";

export const getCategories = async (id: string) => {
  try {
    return await getCategoriesById(id);
  } catch (e) {
    return Promise.resolve([]);
  }
};