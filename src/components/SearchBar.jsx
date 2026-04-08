import { Search } from "lucide-react"
import { useState } from "react"

function SearchBar() {
    const [showSearch, setShowSearch] = useState(false)
    
    return (
        <div className={`relative flex justify-center items-center ${!showSearch && 'mr-6'}`}>
            <button
                className="left-2 absolute"
                onClick={() => setShowSearch(!showSearch)}>
                    <Search />
            </button>
            { 
                showSearch &&
                <input className="outline-2 outline-gray-400 rounded-lg 
                                 sm:py-1 pl-10 max-w-48 md:max-w-none md:w-80" 
                    type="text" 
                    placeholder="search by name ..." 
                    onBlur={() => setShowSearch(!showSearch)}/>
            }
                
        </div>
    )
}

export default SearchBar