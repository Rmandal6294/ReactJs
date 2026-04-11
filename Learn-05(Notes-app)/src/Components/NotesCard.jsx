import { X } from "lucide-react";

const img =
  "https://plus.unsplash.com/premium_photo-1725378975050-becf9a5dc0b0?q=80&w=1170&auto=format&fit=crop";

const NotesCard = ({
  title = "Summer Adventure Notes",
  body = "Packed with ideas for the beach trip. Don't forget sunscreen and the camera.",
  tag = "Travel",
  date = "Apr 9, 2026",
  image = img,
  onDelete,
}) => {

  return (
    <div
      className="min-w-64 max-w-75 min-h-40 relative rounded-2xl overflow-hidden bg-cover bg-center cursor-pointer
        hover:scale-105 hover:shadow-2xl transition-all duration-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/65" />

      <div className="relative z-10 p-3.5 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] font-medium tracking-wide uppercase
            bg-white/20 text-white/90 px-2 py-0.5 rounded-full backdrop-blur-sm line-clamp-1"
          >
            {tag}
          </span>

          <button
          onClick={onDelete}
            className="w-6 h-6 flex items-center justify-center rounded-full
              bg-black/40 text-white/80 hover:bg-red-500/70 hover:text-white
              transition-colors duration-200"
          >
            <X size={12} />
          </button>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white leading-snug mb-1 drop-shadow line-clamp-2">
            {title}
          </h3>
          <p className="text-[11px] text-white/75 leading-snug line-clamp-3 hover:overflow-scroll mb-2">
            {body}
          </p>
          <span className="text-[10px] text-white/50">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
