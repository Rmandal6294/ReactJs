import NavigationBar from "../Components/NavigationBar"
import SearchBar from "../Components/SearchBar"
import MoviesData from "../Components/SearchData"
import { useState } from "react"

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full h-screen flex flex-col gap-5 bg-linear-to-t from-gray-900 to-gray-800">
      <div className="sticky top-0 z-10">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setMovies={setMovies} />
      </div>
      <div className="overflow-auto">
        <MoviesData movies={movies} setMovies={setMovies} searchQuery={searchQuery} />
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar searchColor="bg-gray-800" textColorSearch="text-white" />
      </div>
    </div>
  )
}


export default SearchPage
