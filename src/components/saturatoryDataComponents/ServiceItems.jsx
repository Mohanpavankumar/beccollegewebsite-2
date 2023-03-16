import { Link } from "react-router-dom";


function ServiceItem({imgUrl, title, description,url}){
    return(
          <div className="p-4 col  px-2 w-300 overflow-x-hidden">       
        <div className='rounded-lg overflow-hidden shadow-xl h-10.2 w-full py-1'>
            <img src={imgUrl} alt={title} className='w-full h-40 md:h-48  rounded-t-lg' />
            <div className='p-1 w-auto bg-white'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold h-6'>{title}</h3>
                <div className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm h-56'>
                        <div className='inline-block  bg-white rounded-md h-26 px-2.5 text-justify'>{description}</div>
                       
                        <Link to={url} className='p-40 py-2 text-right underline hover:no-underline
                   text-blue-600 hover:text-blue-800 visited:text-purple-600 "'>viewmore</Link>
                   
                  
                
            </div>
        </div>
        </div>
     </div>
    

        
    
        
    )
}
export default ServiceItem