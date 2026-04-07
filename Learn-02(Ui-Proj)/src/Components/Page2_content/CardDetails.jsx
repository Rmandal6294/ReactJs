import { ArrowUpRight } from "lucide-react"

const CardDetails = (props) => {
  return (
    <div className={`${props.color} w-full mb-5 ml-10 rounded-2xl pl-2 rounded-tr-[100px]`}>
       <div className="w-full flex items-center justify-end ">
            <p className=" bg-white rounded-b-full rounded-tl-full p-3">
                <ArrowUpRight size={"50px"} className=" bg-white rounded-full border-2 w-full h-full flex items-end border-gray-300 mb-10"/>
            </p>
       </div>

       <div className="pl-4 pr-4 pb-4">
            <h1 className="text-4xl text-white font-bold">{props.percentage}</h1>
            <p className="text-white">{props.description}</p>
       </div>
    </div>
  )
}

export default CardDetails
