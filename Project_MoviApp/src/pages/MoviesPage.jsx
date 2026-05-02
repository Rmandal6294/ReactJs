import { Film } from 'lucide-react'
import NavigationBar from '../Components/NavigationBar'
import LoadingOnlyMovies from '../Components/LoadingOnlyMovies'

const MoviesPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 bg-linear-to-t from-gray-900 to-gray-800">
      <div className="sticky top-0 z-10 text-3xl font-bold text-gray-800 bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] p-4 text-center flex items-center justify-center ">
        <Film size={40} className='inline-block mr-2 text-4xl border-l-3 border-r-3 border-gray-800 rounded-xl' />
        Movies
      </div>

      <div className="w-full h-full p-5 bg-gray-700/20 backdrop-blur-md border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
        <LoadingOnlyMovies/>
      </div>
        
      <div className="fixed bottom-0 w-full">
        <NavigationBar moviesColor="bg-gray-800" textColorMovies="text-white" />
      </div>
    </div>
  )
}

export default MoviesPage
