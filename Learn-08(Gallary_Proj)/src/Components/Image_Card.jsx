
const Image_Card = ({image}) => {
  return (
    <div className="w-80 lg:w-100 h-80 lg:h-100 box-border flex flex-col items-center justify-around bg-gray-300 p-3 rounded-xl">
      <div className="w-full h-[80%] p-1">
        <img
        className="rounded-xl w-full h-[80%] object-cover hover:scale-96" 
        src = {image.src.medium} alt ={image.photographer}/>
      </div>

      <div>
        <p className="text-gray-600 font-semibold uppercase"> Author : {image.photographer} </p>
        <a href={image.src.original} target="_blank" rel="noreferrer">
            <button className="w-50 m-3 bg-gray-800 text-white font-semibold p-3 rounded-xl hover:scale-95"> View </button>
        </a>
      </div>
    </div>
  )
}

export default Image_Card
