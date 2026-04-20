import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function CategoriesCard( {category_title, category_image} ) {
    const [showInfo, setShowInfo] = useState(false)
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(`/categories/${encodeURIComponent(category_title.toLowerCase())}`)}>
            <Card className="md:w-146 md:h-136 w-98 h-90 rounded-xl py-0 relative ">
                <div 
                    className={`absolute bg-black opacity-0 ease-in-out duration-350 inset-0 ${showInfo && 'opacity-60'}`}>
                </div>
                <img className="h-full " src={category_image} alt="Nothing" />
                <div 
                    onMouseEnter={() => setShowInfo(true)} 
                    onMouseLeave={() => setShowInfo(false)} 
                    className={`absolute py-6 inset-0 opacity-0 ease-in-out flex justify-center items-center duration-350 ${showInfo && 'opacity-100'}`}>
                        <CardContent className="text-white md:text-3xl text-xl">
                            {category_title.toUpperCase()}
                        </CardContent>
                </div>
            </Card>
        </button>
  )
}

export default CategoriesCard
