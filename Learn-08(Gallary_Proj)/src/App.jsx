import { useEffect, useState } from "react";
import Image_Card from "./Components/Image_Card";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(""); 
  const [activeQuery, setActiveQuery] = useState("nature"); 
  const [pageCount, setPageCount] = useState(1);

  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const fetchImages = async (searchQuery, page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=20&page=${page}`,
        { headers: { Authorization: API_KEY } },
      );
      const data = await res.json();
      setImages(data.photos);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  
  useEffect(() => {
    fetchImages(activeQuery, pageCount);
  }, [pageCount, activeQuery]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      setActiveQuery(query); 
      setPageCount(1); 
      setQuery(""); 
    }
  };

  return (
    <div className="bg-gray-200 w-full min-h-screen text-black">
      <div className="bg-gray-50 border-2 border-gray-400 mb-5 ml-5 mr-5 rounded-2xl shadow-xl shadow-gray-600 text-center sticky top-0">
        <h1 className="lg:text-3xl text-gray-600 uppercase font-bold flex justify-around items-center flex-wrap">
          <span className="text-gray-800">My Project - My Photo Gallery</span>
          <input
            className="lg:text-xl p-3 bg-gray-400 w-full text-white rounded-full border-2 border-gray-700 outline-none m-10"
            type="search"
            placeholder="🔎 Search Photos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </h1>
      </div>

      <div className="flex flex-wrap p-5 justify-around gap-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          images.map((img) => <Image_Card key={img.id} image={img} />)
        )}
      </div>

      <div className="flex justify-center items-center gap-6 py-8">
        <button
          onClick={() => {
            if (pageCount > 1) setPageCount((prev) => prev - 1);
          }}
          disabled={pageCount === 1}
          className="px-6 py-2 bg-gray-700 text-white rounded-full font-semibold shadow-md hover:bg-gray-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          ← Prev
        </button>

        <span className="text-gray-700 font-bold text-lg bg-white px-5 py-2 rounded-full shadow border border-gray-300">
          Page {pageCount}
        </span>

        <button
          onClick={() => setPageCount((prev) => prev + 1)}
          className="px-6 py-2 bg-gray-700 text-white rounded-full font-semibold shadow-md hover:bg-gray-900 transition-all duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default App;
