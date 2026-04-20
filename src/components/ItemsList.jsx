import ItemsCard from "./ItemsCard";

function ItemsList({ items, item_category, item_id }) {
    const filteredItems = items.filter((item) => {
        return (
            item.category.name.toLowerCase() === item_category.toLowerCase()) &&
            item.id !== item_id
    })

    return (
        <div className="flex overflow-scroll gap-2 scrollbar-hidden">
            {filteredItems.slice(-6).map((item) => 
            <div key={item.id}>
                <ItemsCard 
                    title={item.title} 
                    image={item.images} 
                    price={item.price}
                    id={item.id}
                />
            </div>)}
        </div>
    )
}

export default ItemsList