import { useEffect, useState } from "react";
import { shopFetch } from "../api/shop";

function Browse() {
    const [shopData, setShopData] = useState([])
    
        useEffect(() => {
            async function loadShop() {
                const data = await shopFetch()
                setShopData(data)
            }
            loadShop()
        }, [])
        console.log(shopData)
    return (
        <div>Browse</div>
    )
}

export default Browse