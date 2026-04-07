import CardSection3 from "./CardSection3"
import img from "../../asset/img.jpg"
import img2 from "../../asset/img2.jpg"

const RightContentSection = () => {
  return (
    <div className='w-[60%] h-full flex flex-col justify-end items-end p-10 mb-0 relative'>
      <img src = {img} alt = {img2} className="w-full h-full rounded-bl-[400px] rounded-tr-[400px] object-cover "/>

      <div className="absolute right-0 top-0 bg-white rounded-4xl p-10">
          <CardSection3 color = "bg-lime-400"/>
      </div>
      <div className="absolute left-0 bottom-0 bg-white rounded-4xl p-10">
        <CardSection3 color = "bg-blue-400"/>
      </div>
    </div>
  )
}

export default RightContentSection
