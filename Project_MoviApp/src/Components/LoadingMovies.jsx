import { useEffect, useState } from "react";
import MiniMoviBox from "./MiniMoviBox";

const LoadingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [pagenum, setPagenum] = useState(1);

    const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

    const fetchMovies = async (page = 1) => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`);
            const data = await res.json();
            setMovies(prev => [...prev, ...data.results]);
        } catch (e) {
            console.log(e);
            alert("API Problem");
        }
    };

    useEffect(() => {
        fetchMovies(pagenum);
    }, [pagenum]);


    return <div
    onScroll={(e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target; 
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            setPagenum(pagenum + 1);
        }
    }} 
    className="text-white flex flex-wrap items-center justify-around gap-5 w-full h-125 m-auto overflow-auto">
        {movies.map((movie) => (
            <MiniMoviBox
                key={movie.id}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title || movie.name}
                vote_count={movie.vote_count}
                vote_average={movie.vote_average}
                media_type={movie.media_type}
                release_date={movie.release_date || movie.first_air_date}
                language={movie.original_language}
            />
        ))}
    </div>
};

export default LoadingMovies;
