import { useEffect } from "react";
import useData from '../stores/apiStore';
import useSearchStore from "../stores/searchStore"
import ItemsCard from "@/components/ItemsCard";
import { useSearchParams } from "react-router-dom";


function Browse() {
    const { items, fetchItems, loading, error } = useData()
    const { filteredItems, filterList, setQuery } = useSearchStore()

    const [searchParams]  = useSearchParams()
    const queryParams = searchParams.get("product") || ""

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        setQuery(queryParams)
    }, [queryParams])

    useEffect(() => {
        filterList(items)
    }, [queryParams, items])
    

    return (
        <div className="flex flex-col row">
            {loading && <div>...loading</div>}
            {error && <div>{error}</div>}
            {
                !loading && 
                <div className="flex flex-col mb-6">
                    <h1 className="text-xl font-semibold">Search results for: {queryParams}</h1>
                    {                   
                        filteredItems.length === 0 && 
                        (<h1 className="">No items found<br />Try checking your spelling or use a different term</h1>)
                    }
                </div>
            }
            <div className="flex flex-wrap gap-4">
                {
                    !loading && filteredItems.length > 0 &&
                    
                    filteredItems.map(item => 
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

export default Browse