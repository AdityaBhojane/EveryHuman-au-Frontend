import { instance } from "../Helpers/BaseURL";

export default async function FetchDataByCategory(category, price) {
  try {
    const response = await instance.get(`/products.json?limit=100`);
    const filteredProducts = response.data.products.filter(
      (items) => items.product_type == category
    );
    // const newPrice = filteredProducts[0]?.variants[0]?.price;
    if (price) {
      const PriceFilter = filteredProducts.filter(
        (items) =>
          parseInt(items.variants[0].price) < price 
      );
      return PriceFilter.sort((a, b) =>  parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price));
    } else {
      return filteredProducts.sort((a, b) =>  parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price));;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

