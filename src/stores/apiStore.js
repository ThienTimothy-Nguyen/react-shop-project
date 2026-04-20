import { create } from "zustand";
import axios from "axios";

const useData = create((set) => ({
    items: [],
    loading: false,
    error: null,
    
    fetchItems: async () => {
        set({loading: true, error: null})

        try {
            const { data } = await axios.get('/shopItems1.json');
            set({items: data.slice(1,50), loading: false})
        } catch (error) {
            set({error: error.message || "Failed to fetch items", loading: false})
        }                               
    },
}))

export default useData