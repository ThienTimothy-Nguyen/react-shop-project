import { useEffect, useState } from "react";
import { categoriesFetch } from "../api/shop";
import CategoriesCard from "@/components/CategoriesCard";
import Subscription from "@/components/Subscription";

function Categories() {
    const [categories, setCategories] = useState([])
    
        useEffect(() => {
            async function loadCategories() {
                const data = await categoriesFetch()
                setCategories(data)
            }
            loadCategories()
        }, [])
    return (
        <>
            <Subscription />
            <h1 className="my-6 text-2xl row font-medium text-center">Discover new arrivals</h1>
            <div className="flex overflow-scroll gap-4 w-screen [&::-webkit-scrollbar]:hidden">
                { 
                    categories.length > 0 && 
                    categories.slice().map(category => 
                        <div key={category.id}>
                            <CategoriesCard category_image={category.image} category_title={category.name} />
                        </div>) 
                }
            </div>
        </>
    )
}

export default Categories