import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import MoviesPage from "./pages/MoviesPage"
import TvShowsPage from "./pages/TvShowsPage"
import LikedPage from "./pages/LikedPage"
import {Route, Routes} from "react-router-dom"
import { useState } from "react";

const App = () => {
  const [likedMovies, setLikedMovies] = useState([]);

    const handleToggleLike = (movie) => {
        setLikedMovies((prev) =>
            prev.some((m) => m.id === movie.id)
                ? prev.filter((m) => m.id !== movie.id)
                : [...prev, movie]
        );
    };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage likedMovies={likedMovies} onToggleLike={handleToggleLike} />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/tv" element={<TvShowsPage/>} />
        <Route path="/liked" element={<LikedPage likedMovies={likedMovies} onToggleLike={handleToggleLike} />} />
      </Routes>
    </>
  )
}

export default App
