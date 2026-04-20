import { Link } from "react-router-dom";
import { X } from "lucide-react";

function Modal( { setShowModal, showModal } ) {
    return (
        <div className="sm:hidden z-1 flex flex-col gap-4 items-center justify-center absolute 
                        -top-3 -right-18 bg-amber-50 translate-x-[-50%] shadow-xl rounded-xl w-32 h-50
                        pt-4">
            <button onClick={() => setShowModal(!showModal)} className="absolute top-2.5 right-2.5"><X /></button>
            <Link to={'/categories'} className="sm:hidden inline">Explore</Link>
            <Link className="sm:hidden inline">Login</Link>
            <Link className="sm:hidden inline">Sign up</Link>
        </div>
    )
}

export default Modal