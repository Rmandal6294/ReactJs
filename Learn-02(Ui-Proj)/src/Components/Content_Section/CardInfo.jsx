import { ArrowRight } from "lucide-react"

const CardInfo = ({img, description, button, buttonColor, num }) => {
  return (
    <div className="min-w-80.5 w-80.5 h-full flex justify-center p-3 relative shrink-0 hover:scale-105 transition-transform duration-300">
        <img className="w-full h-full object-cover rounded-4xl"
        src = {img}
        alt="Card Info"/>

      <div className="absolute top-0 left-0 w-full h-full text-white p-10 rounded-4xl flex flex-col justify-between gap-5">
            <div>
                <p className="bg-white text-black w-11.25 h-11.25 rounded-full flex items-center justify-center text-2xl font-bold"> {num} </p>
            </div>

            <div>
                <p className="text-lg font-medium mb-10">
                    {description}
                </p>

                <div className="flex w-full items-center justify-between">
                    <button className={`${buttonColor} font-bold text-xl w-2/3 text-white p-3 rounded-[40px] hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                        {button}
                    </button>
                    <p className={`${buttonColor} font-bold text-xl  text-white w-11.25 h-11.25  rounded-full flex items-center justify-center hover:scale-150 transition-transform duration-300 cursor-pointer`}>
                        <ArrowRight/>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardInfo
