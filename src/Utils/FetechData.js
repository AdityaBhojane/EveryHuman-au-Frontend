import { instance } from "../Helpers/BaseURL";

export default async function FetchData(page = 2, count = 8) {
  try {
    const response = await instance.get(`/products.json?limit=${count}&page=${page}`);
    // console.log(response.data.products)
    // Introduce a 2-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data.products;
  } catch (error) {
    console.log(error);
    return null;
  }
}
