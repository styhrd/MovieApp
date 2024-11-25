import React, {useState} from 'react'
import ImageFiller from 'react-image-filler';
import MovieDisplay from './MovieDisplay';

const Nav = ({query, setQuery, movies ,handleSearch}) => {

    
    return (<>
        <div className='flex justify-between items-center '>
            
            <div className='flex items-center space-x-4 w-[20%]'>
                <i class="bi bi-list icon "></i>
                <ImageFiller width={100} height={30} />
            </div>

            <div className='flex items-center space-x-4 w-[50%] justify-center '>
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className='w-[70%] text-white rounded-xl p-1 bg-[#121212] ring-1 ring-slate-400' placeholder='Search' />
                <button onClick={handleSearch} className='text-white'><i class="bi bi-search"></i></button>
                <i class="bi bi-mic-fill icon  bg-gray-500 rounded-[50%] text-[18px] px-2 py-1 "></i>  
            </div>

            <div className='navflex w-[20%]'>
                <i class="bi bi-camera-video icon"></i>
                <i class="bi bi-bell icon"></i>
                <ImageFiller className='rounded-full proficon' />
            </div>


            
        </div>
            

  </>
    
  )
}

export default Nav