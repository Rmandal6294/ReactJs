import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import MoviesPage from "./pages/MoviesPage"
import TvShowsPage from "./pages/TvShowsPage"
import LikedPage from "./pages/LikedPage"
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/tv-shows" element={<TvShowsPage/>} />
        <Route path="/liked" element={<LikedPage/>} />
      </Routes>
    </>
  )
}

export default App
