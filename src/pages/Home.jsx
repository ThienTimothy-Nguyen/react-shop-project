import { useEffect, useState } from "react";
import { shopFetch } from "../api/shop";
import shop_background from "../assets/pexels-karola-g-5632407.jpg"
import Subscription from "../components/Subscription";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate()

    const [shopData, setShopData] = useState([])

    useEffect(() => {
        async function loadShop() {
            const data = await shopFetch(5)
            setShopData(data)
        }
        loadShop()
    }, [])
    console.log(shopData)
    return (
        <div className="relative h-screen">
            <img 
                src={shop_background} alt="" 
                className="w-full h-full object-cover opacity-70"
            />
            <div className="flex absolute inset-0 flex-col gap-4 justify-center items-center home__adjust-padding w-screen">
                <h1 className="text-3xl/8 sm:text-5xl/16 lg:text-6xl/18 font-medium max-w-120 sm:max-w-190 lg:max-w-230 text-center row">
                    Explore Your Favorite Brands with Shop X
                </h1>
                <h2 className="text-white font-medium max-w-120 leading-6 md:leading-8 sm:max-w-160 lg:max-w-180 tracking-widest text-sm sm:text-lg lg:text-2xl text-center text-outline row">
                    Trending items from all categories - makeup, clothings, accessories and more !
                </h2>
                <button onClick={() => navigate('/browse')} className="w-[30%] hover:bg-blue-200 bg-blue-300 ease-in-out duration-200 
                                    shadow-lg mt-2 md:mt-6 rounded-2xl py-2">
                    Explore now
                </button>
            </div>
            {/* <Subscription /> */}
        </div>
    )
}

export default Home