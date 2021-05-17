import { getDescriptionByItemId, getItemById, ItemProps } from "lib/api";
import { getCategories } from "./categories";

export const getItemDetail = async (id: string) => {
  if (id) {
    try {
      const [item, description] = await Promise.allSettled([
        getItemById(id),
        getDescriptionByItemId(id),
      ]);

      if (item.status === "fulfilled") {
        const newItem: PromiseFulfilledResult<ItemProps> = item;
        const categories = await getCategories(
          newItem.value.category_id as string
        );

        return {
          item,
          description,
          categories,
        };
      }

      return {
        item,
        description,
      };
    } catch (error) {
      return {
        error
      };
    }
  }

  return {};
}