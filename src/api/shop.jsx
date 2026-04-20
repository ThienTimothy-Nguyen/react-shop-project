import axios from 'axios';

export async function categoriesFetch() {
  try {
    const { data } = await axios.get('/categories.json',{
        params: { offset: 0, limit: 5 }
    });

    return data.slice(0,5);
  } catch (error) {
    console.log(error.message);
  }
}


