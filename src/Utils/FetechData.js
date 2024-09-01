import {instance} from "../Helpers/BaseURL"

export default async function FetchData(page=1) {
    try {
        const response = await instance.get(`/products.json?limit=8&page=${page}`)
        // console.log(response.data.products)
        return response.data.products       
    } catch (error) {
        console.log(error)
        return null;
    }
}