import { Heart } from "lucide-react";

const ImageBox = ({ item, index, total, image_url }) => {
    return (
        <div className="relative w-full h-full flex justify-center items-center text-white">
            <div className="flex justify-between items-center absolute top-0 w-full p-5 font-semibold">
                <div className="bg-black/70 px-3 py-1 rounded-2xl">
                    {index + 1} / {total}
                </div>
                <Heart className="cursor-pointer bg-white/80 text-black rounded-full p-1" size={30} />
            </div>
            <img
                className="w-full h-full object-cover rounded-2xl"
                src={image_url}
                alt="movie"
            />
            <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-2xl font-bold">{item.title}</div>
                <div className="text-sm">{item.release_date}</div>
            </div>
        </div>
    );
};

export default ImageBox;
