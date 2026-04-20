import { create } from "zustand";

const useSearchStore = create((set) => ({
    query: "",
    filteredItems: [],
    setQuery: (keyword) => set({ query: keyword || ""}),
    
    filterList: (items) => {
        const keyword = useSearchStore.getState().query.toLowerCase();
        const filtered_items = !keyword ? items : items.filter((item) => 
            item.title.toLowerCase().includes(keyword))
        set({ filteredItems: filtered_items })
    }  
}))

export default useSearchStore