import { Zap } from "lucide-react"
import CardDetails from "./CardDetails"

const LeftContent = () => {
  return (
    <div className=" w-1/2 h-full flex flex-col justify-between">
      <div className="pl-10">
            <p className="text-6xl font-bold mt-10 leading-tight"> E-com market is expected to exceed 
                <span className="bg-lime-400 rounded-full ml-1">$300B</span> in 2027
            </p>
            <div className="flex justify-center items-start">
                <Zap size={82} color="#0080ff" className="p-3"/>
                <p className="text-gray-500 text-lg mt-4 ml-2 mr-30 font-medium">
                    E-commerce is expected to continue its growth trajectory, with increasing adoption of online shopping and 
                    advancements in technology driving the market forward.
                </p>
            </div>
      </div>

      <div className="flex gap-6 mt-10">
            <CardDetails percentage="26.7%" description="rising smartphone usage, and the convenience of online shopping." color="bg-blue-400" />
            <CardDetails percentage="15.3%" description="increasing consumer confidence and improved payment security." color="bg-lime-400"/>
      </div>
    </div>
  )
}

export default LeftContent
