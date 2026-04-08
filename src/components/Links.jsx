
function Links() {
  return (
    <div className="flex sm:gap-16 gap-8">
        <div className="flex flex-col">
            <h1 className="font-medium text-gray-700 text-sm md:text-md">MAIN</h1>
            <div className="flex flex-col gap-1 mt-2 text-xs md:text-sm text-gray-600">
                <a href="" className="cursor-not-allowed">FAQs</a>
                <a href="" className="cursor-not-allowed">Support</a>
                <a href="" className="cursor-not-allowed">About Us</a>
            </div>
        </div>
        <div className="flex flex-col">
            <h1 className="font-medium text-gray-700 text-sm md:text-md">PRODUCT</h1>
            <div className="flex flex-col gap-1 mt-2 text-xs md:text-sm text-gray-600">
                <a href="" className="cursor-not-allowed">Browse</a>
                <a href="" className="cursor-not-allowed">Trending</a>
                <a href="" className="cursor-not-allowed">New Arrivals</a>
            </div>
        </div>
        <div className="flex flex-col">
            <h1 className="font-medium text-gray-700 text-sm md:text-md">CONTACT</h1>
            <div className="flex flex-col gap-1 mt-2 text-xs md:text-sm text-gray-600">
                <a href="" className="cursor-not-allowed">Email</a>
                <a href="" className="cursor-not-allowed">Phone</a>
                <a href="" className="cursor-not-allowed">Help Ticket</a>
            </div>
        </div>
        <div className="flex flex-col">
            <h1 className="font-medium text-gray-700 text-sm md:text-md">LEGAL</h1>
            <div className="flex flex-col gap-1 mt-2 text-xs md:text-sm text-gray-600">
                <a href="" className="cursor-not-allowed">GDPR</a>
                <a href="" className="cursor-not-allowed">Privacy Policy</a>
                <a href="" className="cursor-not-allowed">Terms of Service</a>
            </div>
        </div>
    </div>
  )
}

export default Links