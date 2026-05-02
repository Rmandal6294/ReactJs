import { Heart } from 'lucide-react'
import NavigationBar from '../Components/NavigationBar'


const LikedPage = ({ likedMovies, onToggleLike }) => {

  return (
    <div className="w-screen h-screen flex flex-col gap-5 bg-linear-to-t from-gray-900 to-gray-800">
      <div className="sticky top-0 z-10 text-3xl font-bold text-gray-800 bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] p-4 text-center flex items-center justify-center ">
        <Heart size={40} className='inline-block mr-2 text-4xl border-l-3 border-r-3 border-gray-800 rounded-xl' />
        Liked Movies
      </div>

      <div className="flex flex-wrap justify-around items-start gap-4 p-6 w-full h-[80%] overflow-auto">
        {likedMovies.map((movie) => (
          <div key={movie.id} className=" rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer w-40 h-50">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white text-sm font-semibold">
              {movie.title}
            </div>
            <button
              onClick={() => onToggleLike(movie)}
              className="absolute top-2 right-2 bg-white/80 rounded-full p-1"
            >
              ❤️
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full">
        <NavigationBar likedColor="bg-gray-800" textColorLiked="text-white" />
      </div>
    </div>
  );
};

export default LikedPage;
