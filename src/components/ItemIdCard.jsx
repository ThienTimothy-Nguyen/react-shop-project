import { Card } from "./ui/card";

function ItemIdCard({ image }) {
  return (
    <Card className='p-0 w-70 h-80 sm:w-90 sm:h-104 flex-none'>
        <img className="h-full" src={image} alt="" />
    </Card>
  )
}

export default ItemIdCard