import {instance} from "../Helpers/BaseURL"

export default async function FetchDataByCategory(category) {
    try {
        const response = await instance.get(`https://everyhuman.com.au/products.json`)
        // console.log(response.data.products)
        const filteredProducts =  response.data.products.filter((items) => items.product_type == category)
        return filteredProducts
        // return response.data.products

    } catch (error) {
        console.log(error)
        return null;
    }
}

// https://everyhuman.com.au/products.json?category=Shoes&limit=10&page=1