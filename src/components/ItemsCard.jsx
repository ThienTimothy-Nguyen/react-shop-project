import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function ItemsCard({title, image, price, id}) {
  const navigate = useNavigate();

  return (
    <button className="w-44 h-68 md:w-48 md:h-76 flex-none" onClick={() => navigate(`/items/${id}`)}>
        <Card className="w-full py-0 rounded-sm gap-0 bg-amber-50">
            <img className=" min-h-[72%] " src={image} alt="Nothing" />
                <CardContent className="text-black text-start flex flex-col p-2">
                    <h1 className="font-normal text-[14px] md:text-sm line-clamp-2">{title.toUpperCase()}</h1>
                    <h1 className="font-semibold text-[16px] md:text-lg">${price.toFixed(2)}</h1>
                </CardContent>
        </Card>
    </button>
  )
}

export default ItemsCard