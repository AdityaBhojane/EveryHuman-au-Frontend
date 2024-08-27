import {instance} from "../Helpers/BaseURL"

export default async function FetchData(page=1) {
    try {
        const response = await instance.get(`?limit=2&page=${page}`)
        console.log(response.data.products)
        return response.products
    } catch (error) {
        console.log(error)
        return null;
    }
}