import { instance } from "../Helpers/BaseURL";

export default async function FetchDataBySearch(searchValue, price) {
  try {
    const response = await instance.get(`/products.json?limit=500`);
    // console.log(response.data.products)
    // Introduce a 2-second delay
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const filteredProducts = response.data.products.filter(
      (items) =>
        items.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    // const newPrice = filteredProducts[0]?.variants[0]?.price;
    if (price) {
      const PriceFilter = filteredProducts.filter(
        (items) =>
          parseInt(items.variants[0].price) < price 
      );
      return PriceFilter.sort((a, b) =>  parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price));
    } else {
      console.log(filteredProducts);
      return filteredProducts.sort((a, b) =>  parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price));
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

// https://everyhuman.com.au/products.json?category=Shoes&limit=10&page=1
