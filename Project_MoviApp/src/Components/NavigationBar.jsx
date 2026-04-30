import { House, Search, Film, TvMinimal, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ HomeColor = "transparent", textColorHome = "text-gray-800", searchColor = "transparent", textColorSearch = "text-gray-800", moviesColor = "transparent", textColorMovies = "text-gray-800", tvColor = "transparent", textColorTv = "text-gray-800", likedColor = "transparent", textColorLiked = "text-gray-800" }) => {
    return (
        <nav className="bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] flex justify-around items-center py-3 text-gray-800 cursor-pointer w-full">

            <Link to="/" className={`flex flex-col justify-center items-center w-50 h-fit ${HomeColor} ${textColorHome} px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white duration-500`}>
                <div className='flex flex-col justify-center items-center'>
                    <House />
                    <span>Home</span>
                </div>
            </Link>

            <Link to="/search" className={`flex flex-col justify-center items-center w-50 h-fit ${searchColor} ${textColorSearch} px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white duration-500`}>
                <div className='flex flex-col justify-center items-center'>
                    <Search />
                    <span>Search</span>
                </div>
            </Link>

            <Link to="/movies" className={`flex flex-col justify-center items-center w-50 h-fit ${moviesColor} ${textColorMovies} px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white duration-500`}>
                <div className='flex flex-col justify-center items-center'>
                    <Film />
                    <span>Movies</span>
                </div>
            </Link>

            <Link to="/tv" className={`flex flex-col justify-center items-center w-50 h-fit ${tvColor} ${textColorTv} px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white duration-500`}>
                <div className='flex flex-col justify-center items-center'>
                    <TvMinimal />
                    <span>TV</span>
                </div>
            </Link>

            <Link to="/liked" className={`flex flex-col justify-center items-center w-50 h-fit ${likedColor} ${textColorLiked} px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white duration-500`}>
                <div className='flex flex-col justify-center items-center'>
                    <Heart />
                    <span>Liked</span>
                </div>
            </Link>
        </nav>
    );
}

export default NavigationBar
