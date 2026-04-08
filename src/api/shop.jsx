import axios from 'axios';

export async function shopFetch(limit = 20) {
    try{
    const { data } = await axios.get(`https://dummyjson.com/products`,
        {
            params: {
                limit: limit
            }
        }
    )
    return data.products}
    catch(error) {
        console.log(error.message)
    }
}
