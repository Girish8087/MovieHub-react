import React, { useState } from 'react'
import Cards from './Cards'
import { useLoaderData } from 'react-router'
import SearchInput from './SearchInput'

const Movies = () => {

  const movies = useLoaderData()

  const [search, setSearch] = useState("")

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const finalMovies = movies.results.filter((currMovie) => currMovie.title.toLowerCase().includes(search.toLowerCase()) )
  console.log(finalMovies)
  return (
    <div>
      <SearchInput search={search} handleInput={handleInput} />
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6' >
      {
        finalMovies.map((movie) => {
          return <Cards key={movie.id} movie={movie} />
        })
      }
    </ul>
    </div>
  )
}

export default Movies
