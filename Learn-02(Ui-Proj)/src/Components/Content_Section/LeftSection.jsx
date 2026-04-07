import { ArrowUpRight } from 'lucide-react'

const LeftSection = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between p-10 text-black">
        <div>
            <h3 className='text-6xl font-bold mb-4 leading-[1.3]'>
                Prospective <br></br><span className='bg-gray-100 rounded-full pt-0 mt-10'> Customer </span><br></br>  Segmentation
            </h3>

            <p  className='text-xl text-gray-500'>
                We are targeting the young and tech-savvy individuals who are looking for a convenient and secure way to manage their finances. Our digital banking platform is designed to meet the needs of this demographic, providing them with a seamless and user-friendly experience.
            </p>
        </div>

        <div className='bg-gray-200 hover:p-1 hover:scale-150 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer transition-transform duration-300'>
            <ArrowUpRight size={62} />
        </div>
    </div>
  )
}

export default LeftSection
