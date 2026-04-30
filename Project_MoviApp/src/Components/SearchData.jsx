import { useEffect} from "react";

const MoviesData = ({ searchQuery, movies, setMovies }) => {
  const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

  const fetchContent = async (query) => {
    try {
      if (!query?.trim()) return;

      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );

      const data = await res.json();
      
      const filtered = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv');
      setMovies(filtered);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchContent(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      {movies?.length > 0 ? (
        <div className="text-white flex flex-wrap items-center justify-around gap-5 w-full h-full m-auto overflow-auto p-1">
          {movies.map((item) => (
            <div key={item.id} className="bg-gray-800/50 backdrop-blur-md border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 rounded-xl cursor-pointer w-37.5 sm:w-62.5 md:w-62.5 lg:w-75">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{item.title || item.name}</h3>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                {item.media_type === 'tv' ? '📺 TV Show' : '🎬 Movie'}
              </p>
              <p className="text-gray-400 text-sm">{item.release_date || item.first_air_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-center">No results found.</p>
      )}
    </div>
  )
}

export default MoviesData
