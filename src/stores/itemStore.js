import { create } from "zustand";

const useItemStore = create((set) => ({
    item_by_id: null,

    findItems: (items, params) => {
        const itemOnId = items.find((item) => String(item.id) === params)
        set({item_by_id: itemOnId || null})
    }
}))

export default useItemStore