import { Heart } from "lucide-react";

const ImageBox = ({ item, index, total, image_url, isLiked, onToggleLike }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center text-white">
      <div className="flex justify-between items-center absolute top-0 w-full p-5 font-semibold">
        <div className="bg-black/70 px-3 py-1 rounded-2xl">
          {index + 1} / {total}
        </div>
        <Heart
          onClick={() => onToggleLike(item)}
          className="cursor-pointer bg-white/80 rounded-full p-1 transition-colors"
          size={30}
          // Filled red if liked, outline black if not
          fill={isLiked ? "red" : "none"}
          color={isLiked ? "red" : "black"}
        />
      </div>
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={image_url}
        alt="movie"
      />
      <div className="absolute bottom-0 w-full p-5 bg-linear-to-t from-black/70 to-transparent">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="text-sm">{item.release_date}</div>
      </div>
    </div>
  );
};

export default ImageBox;
