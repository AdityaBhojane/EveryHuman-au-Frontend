import { instance } from "../Helpers/BaseURL";

export default async function FetchDataByCategory(category, price) {
  try {
    const response = await instance.get(`/products.json?limit=100`);
    const filteredProducts = response.data.products.filter(
      (items) => items.product_type == category
    );
    const newPrice = filteredProducts[0]?.variants[0]?.price;
    if (price > newPrice) {
      return filteredProducts.filter(
        (items) =>
          parseInt(items.variants[0].price) < price &&
          parseInt(items.variants[0].price) > price - price / 4
      );
    } else {
      return filteredProducts;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}