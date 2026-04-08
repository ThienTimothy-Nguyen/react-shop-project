import { Link } from "react-router";
import { Menu } from 'lucide-react';
import ShopX_logo from '../assets/shopX_logo.png'
import { useState } from "react";
import Modal from "../components/Modal";
import SearchBar from "../components/SearchBar";

function Header() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="relative row flex justify-between items-center my-4 md:my-6">
            <Link className="w-28 mr-4" to='/'>
                <img className="w-full opacity-85" src={ShopX_logo} alt="" />
            </Link>
            <div className="flex gap-5 justify-center items-center">
                <SearchBar />
                <div className='flex flex-col relative'>
                    <button onClick={() => setShowModal(!showModal)} className="sm:hidden show_none w-full">
                        <Menu />
                    </button>
                    { 
                        showModal && <Modal setShowModal = {setShowModal} showModal={showModal} />
                    }
                </div>
                <Link to={'/browse'} className="hidden sm:inline text-[17px]">Explore</Link>
                <Link className="hidden sm:inline text-[17px]">Login</Link>
                <Link className="hidden sm:inline text-[17px]">Sign up</Link>
            </div>
            
        </div>
  )
}

export default Header