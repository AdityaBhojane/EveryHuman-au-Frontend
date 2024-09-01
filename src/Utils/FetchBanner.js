import { instance } from "../Helpers/BaseURL";


export default async function FetchBanner() {
    try {
        const response = await instance.get('/collections.json')
        return response.data
    } catch (error) {
        console.log(error)
        return null;
    }
}