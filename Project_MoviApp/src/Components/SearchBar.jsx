import { Search} from "lucide-react";
import MoviesData from "./SearchData";

const SearchBar = ({ searchQuery, setSearchQuery, setMovies}) => {
  return (
    <div className="flex items-center justify-around w-full box-content">
      <input
        type="text"
        placeholder='Search for movies, TV shows, people...'
        className='w-full h-7 rounded-md bg-gray-800/50 backdrop-blur-md border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white p-10 text-sm lg:text-base m-5'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={() => setSearchQuery(searchQuery)} 
        className='text-gray-400 hover:text-white transition-colors duration-300 bg-[linear-gradient(10deg,#e7aa51,#e7aa51,#ac7031)] p-5 rounded-xl cursor-pointer m-5'>
        <Search size={20} />
      </button>
    </div>
  )
}

export default SearchBar
