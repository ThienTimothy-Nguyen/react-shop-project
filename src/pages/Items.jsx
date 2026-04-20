import useItemStore from "@/stores/itemStore";
import useData from "@/stores/apiStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemIdCard from "@/components/ItemIdCard";
import ItemsList from "@/components/ItemsList";

function Items() {
  const item_by_id = useItemStore((state) => state.item_by_id);
  const findItems = useItemStore((state) => state.findItems)
  const { items, fetchItems } = useData();
  let params = useParams();

  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    findItems(items, params.id)
  }, [items, params.id, findItems])

  return (
    item_by_id &&

    <div className="row flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10">
        <ItemIdCard image={item_by_id.images} />
        <div className="flex flex-col justify-around gap-2 min-w-0">
          <h1 className="text-3xl font-bold">${item_by_id.price.toFixed(2)}</h1>
          <h1 className="text-2xl whitespace-normal line-clamp-1">{item_by_id.title}</h1>
          <h1 className="text-lg">Category: {item_by_id.category.name}</h1>
          <ItemsList 
            items={items} 
            item_category={item_by_id.category.name} 
            item_id={item_by_id.id}
          />
        </div>
      </div>
      <h1 className="text-xl font-bold">Product Description:</h1>
      <p className="text-lg">{item_by_id.description}</p>
    </div>
    
  )
}

export default Items