import React, { useEffect } from 'react'

const MovieDisplay = ({movies}) => {
  

  useEffect((
    
  ),[])
  
  return (
    <>
      {movies.length == 0 ? (
        <li>Nothing found</li>
      ) : (
          
            movies.map((movie) => {
              return <li className='text-white'> {movie.Title}</li>
            })
          
      )}
    </>
  )
}

export default MovieDisplay