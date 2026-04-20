import useData from "@/stores/apiStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemsCard from "@/components/ItemsCard";


function Category() {
    const { items, fetchItems, loading, error } = useData()
    const { category } = useParams()

    useEffect(() => {
        fetchItems()
    }, [])

    const filteredItems = items.filter(item => item.category.name.toLowerCase() === category.toLowerCase())

    const [sortOrder, setSortOrder] = useState("");

    const sortedItems = filteredItems.sort((a, b) => {
        if (sortOrder === "low-high") return a.price - b.price;
        if (sortOrder === "high-low") return b.price - a.price;
        return 0;
    });

    return (
        <div className="flex flex-col row">
            {loading && <div>...loading</div>}
            {error && <div>{error}</div>}
            {!loading && 
                <div className="mb-6 flex flex-col justify-center gap-2 w-full relative">
                    <h1 className="text-3xl font-semibold ">
                        {category}
                    </h1>
                    <div className=" flex items-center gap-1">
                        <select className="bg-gray-600/60 rounded-xl p-1  font-semibold text-sm text-amber-50" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                            <option value="">Filter</option>
                            <option value="low-high">Price: low to high</option>
                            <option value="high-low">Price: high to low</option>
                        </select>
                    </div>
                </div>}
            <div className="flex flex-wrap gap-4">
                {
                    !loading && filteredItems.length > 0 &&
                    
                    sortedItems.map(item => 
                        <div key={item.id}>
                            <ItemsCard 
                                title={item.title} 
                                image={item.images} 
                                price={item.price}
                                id={item.id}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Category