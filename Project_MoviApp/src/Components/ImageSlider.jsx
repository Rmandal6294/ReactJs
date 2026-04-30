import { useEffect, useState } from "react";
import ImageBox from "./ImageBox";

const ImageSlider = () => {
    const [popular, setPopular] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

    const fetchMovies = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            );
            const data = await res.json();
            setPopular(data.results);
        } catch (e) {
            console.log(e);
            alert("API Problem");
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // Auto slide every 1s
    useEffect(() => {
        if (popular.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === popular.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [popular]);

    return (
        <aside className="w-[80%] lg:w-[30%] h-125 m-auto overflow-hidden rounded-4xl">
            {popular.length > 0 && (
                <ImageBox
                    index={currentIndex}
                    total={popular.length}
                    item={popular[currentIndex]}
                    image_url={`https://image.tmdb.org/t/p/w500${popular[currentIndex].poster_path}`}
                />
            )}
        </aside>
    );
};

export default ImageSlider;
