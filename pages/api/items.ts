import { searchItemsByQuery } from "lib/api";
import { GetServerSidePropsContext } from "next";
import { getCategories } from "./categories";


export const getItems = async (context: GetServerSidePropsContext) => {
  const { search } = context.query;

  if (search) {
    try {
      const items = await searchItemsByQuery(search, context.locale as string);
      const categoryId = items?.[0].category_id;
      const categories = await getCategories(categoryId);

      return {
        items,
        categories,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }

  return {};
}