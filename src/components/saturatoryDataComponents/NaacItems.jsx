import { Link } from "react-router-dom";
import React, {useState} from "react";


function NaacItem({ title, parts, index }) {
const [openItems, setOpenItems] = useState()
console.log(title, index, parts)
    return (
        <div className="p-4 col px-2 w-300 overflow-x-hidden bg-cyan-100 rounded-xl">
            <div className='rounded-lg overflow-hidden py-1'>
            
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold h-6' onClick={() => setOpenItems(title)}>{title}</h3>
                {openItems == title && <div className='flex text-xs md:text-sm'>
                    <ul>
                   
                    {parts.map((item) =>
                    <li>

                    
                
                        <Link to={item[1]} className='text-lg underline hover:no-underline
                   text-blue-600 hover:text-blue-800 visited:text-purple-600'>{item[0]}</Link>
                   </li>
                    )}
                    </ul>
                   
                </div>}
            </div>
        </div>
    )
}
export default NaacItem