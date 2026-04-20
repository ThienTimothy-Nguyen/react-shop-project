import axios from 'axios';

export async function categoriesFetch() {
  try {
    const { data } = await axios.get(`${import.meta.env.BASE_URL}categories.json`);

    return data.slice(0,5);
  } catch (error) {
    console.log(error.message);
  }
}


