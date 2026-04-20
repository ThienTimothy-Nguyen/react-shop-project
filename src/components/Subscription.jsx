

function Subscription() {
  return (
    <div className="row min-h-76 flex text-gray-700 items-center justify-center text-center flex-col bg-blue-200">
        <div className="text-2xl font-bold animate-bounce gap-2 flex items-center justify-center">
          <h1>🌟</h1>
          <h1 className="">
               SUBSCRIBE NOW TO START SAVING
          </h1>
          <h1>🌟</h1>
        </div>
        <p className="my-4 max-w-76 text-lg font-medium">
            Unlock exclusive deals and discounts — save more every time you shop!
        </p>
        <button className="bg-amber-500 hover:scale-95 ease-in-out duration-250 text-white font-semibold text-xl w-48 h-12 rounded-xl">
            Sign up
        </button>
    </div>
  )
}

export default Subscription