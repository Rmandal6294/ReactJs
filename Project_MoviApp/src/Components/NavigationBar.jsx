import { House, Search, Film, TvMinimal, Heart } from 'lucide-react';

const NavigationBar = () => {
  return (
    <nav className="bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] flex justify-around items-center py-3 rounded-full text-gray-800 cursor-pointer">

        <div className='flex flex-col justify-center items-center w-50 h-fit hover:bg-gray-800 px-4 py-1 hover:rounded-full hover:text-white duration-500'>
            <House/>
            <span>Home</span>
        </div>
        <div className='flex flex-col justify-center items-center w-50 h-fit hover:bg-gray-800 px-4 py-1 hover:rounded-full hover:text-white duration-500'>
            <Search/>
            <span>Search</span>
        </div>
        <div className='flex flex-col justify-center items-center w-50 h-fit hover:bg-gray-800 px-4 py-1 hover:rounded-full hover:text-white duration-500'>
            <Film/>
            <span>Movies</span>
        </div>
        <div className='flex flex-col justify-center items-center w-50 h-fit hover:bg-gray-800 px-4 py-1 hover:rounded-full hover:text-white duration-500'>
            <TvMinimal/>
            <span>TV</span>
        </div>
        <div className='flex flex-col justify-center items-center w-50 h-fit hover:bg-gray-800 px-4 py-1 hover:rounded-full hover:text-white duration-500'>
            <Heart/>
            <span>Liked</span>
        </div>
    </nav>
  )
}

export default NavigationBar
