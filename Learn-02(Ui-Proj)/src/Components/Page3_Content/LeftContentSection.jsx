import {CircleAlert, ChevronRight} from "lucide-react"

const LeftContentSection = () => {
    return (
        <div className='w-[40%] h-full flex flex-col justify-between pt-10'>
            <div className="pl-10">
                <h1 className="text-6xl font-bold leading-tight margin-0 text-black">The
                    <span className="bg-lime-400 rounded-full px-2 text-black">opportunity</span>
                </h1>
                <div className="mt-8">
                    <p className="text-lg text-gray-400 mb-3 mt-4 ml-2 mr-10 font-medium">
                        Our deep experience in credit products, advanced proprietary payment and information technologies, and successful collaborations with 200+ clients globally position us to succeed. Combined with favorable market trends.
                    </p>
                    <p className=" text-gray-400 text-lg mt-4 ml-2 mr-10 font-medium">
                        Combined with favorable market trends, we are confident in our ability to build a unique platform for SMEs in emerging markets. And successful collaborations with 200+ clients
                    </p>
                </div>
            </div>

            <div className="bg-gray-200 flex justify-between w-62.5 ml-10 mb-30 rounded-full p-1 shadow-gray-400 hover:shadow-xl hover:p-1.5 transition-transform duration-500">
                <CircleAlert size={40} className="text-white bg-black rounded-full"/>
                <ChevronRight size={40} className="text-gray-500"/>
            </div>
        </div>
    )
}

export default LeftContentSection
