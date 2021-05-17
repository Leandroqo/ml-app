export const api = `https://api.mercadolibre.com`;

type Address = {
  state_name: string;
  city_name: string;
}

type Shipping = {
  free_shipping: boolean;
}

export type DescriptionsProps = {
  plain_text: string;
}

export type ItemProps = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  address: Address;
  shipping: Shipping;
  condition: string;
  sold_quantity: string;
  category_id: string;
  currency_id: string;
}

export type Category = {
  id: string;
  name: string;
}

const handleResponse = (response: Response) => {
  try {
    if (response.status !== 200) {
      return Promise.reject({ name: "API-ERROR", message: "Desculpe não foi possível carregar o recurso. Tente mais tarde!" });
    } else {
      return response.json();
    }
  } catch (e) {
    return e;
  }
}

const getRequest = (input: RequestInfo, init?: RequestInit) => {
  return fetch(input, init).then(handleResponse);
}

export const searchItemsByQuery = (query: string | string[], lang: string, limit = 4): Promise<ItemProps[]> => {
  const locale = lang === "pt" ? "MLB" : "MLA";

  return getRequest(`${api}/sites/${locale}/search?q=${query}&limit=${limit}`)
    .then(response => response?.results);
}

export const getItemById = (id: string): Promise<ItemProps> => {
  return getRequest(`${api}/items/${id}`);
}

export const getDescriptionByItemId = (id: string): Promise<DescriptionsProps> => {
  return getRequest(`${api}/items/${id}/description`);
}
 
export const getCategoriesById = (categoryId = ""): Promise<Category[]> => {
  return getRequest(`${api}/categories/${categoryId}`)
    .then(response => response?.['path_from_root']);
}