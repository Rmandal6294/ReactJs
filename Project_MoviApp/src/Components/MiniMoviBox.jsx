import {Heart, Star} from 'lucide-react'


const MiniMoviBox = (props) => {
    return (
        <div className='bg-white/10 cursor-pointer backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-xl text-white w-30 h-40 lg:w-50 lg:h-55 relative'>
            <img
                className='w-full h-full p-1 rounded-xl object-cover'
                src={props.img} alt="movies" />

            <p className='text-center w-full overflow-hidden bg-[linear-gradient(90deg,#000000,#737373)] absolute bottom-0 p-1 rounded-b-xl text-sm lg:text-base h-7'> 
                {props.title}
            </p>

            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-xl'>
                <p className='text-sm lg:text-base flex items-center gap-1 justify-around'>
                    <Heart className='inline-block' size={20} color="red"/>
                    {props.vote_count}
                </p>
                <p className='text-sm lg:text-base flex items-center gap-1 justify-around'>
                    <Star className='inline-block' size={20} color="yellow"/>
                    {props.vote_average.toFixed(1)/2}
                </p>
            </div>

            <div className='absolute top-0 w-full h-fit flex items-center justify-between gap-5 bg-gray-800/50 backdrop-blur-md border border-gray-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-xl p-2 text-xs lg:text-sm'>
                <p>{props.media_type.toUpperCase()}</p>
                <p>{props.release_date?.slice(0,4)}-{props.language.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default MiniMoviBox
