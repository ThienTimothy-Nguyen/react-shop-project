import ShopX_logo from '../assets/shopX_logo.png';
import Links  from '../components/Links'

function Footer() {
  return (
    <div className=" row my-6 md:my-8 flex flex-col md:flex-row justify-center items-center">
        <Links />
        <div 
            className='bg-gray-300 w-[80vw] md:w-px h-px md:h-24 my-4 md:mx-16 md:my-0 shadow-xl'>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <figure className='w-24 mr-4'>
                <img 
                    src={ShopX_logo} 
                    alt="logo"
                    className='w-full opacity-85' 
                />
            </figure>
            <h1 className='text-gray-500 text-xs md:text-sm text-center'>
                © 2026 Shop X Inc. All Rights Reserved.
            </h1>
            <div className='flex gap-2 items-center justify-center'>
                <a href="" className='cursor-not-allowed'>
                    <i className="fa-brands fa-facebook text-xl opacity-75"></i>
                </a>
                <a href="" className='cursor-not-allowed'>
                    <i className="fa-brands fa-square-instagram text-xl opacity-75"></i>
                </a>
                <a href="" className='cursor-not-allowed'>
                    <i className="fa-brands fa-square-x-twitter text-xl opacity-75"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer