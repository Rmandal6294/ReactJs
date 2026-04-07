import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const MainContentSection = () => {
  return (
    <div className=" h-[84vh] flex items-center justify-center gap-10 p-0">
       <LeftSection/>
       <RightSection/>
    </div>
  )
}

export default MainContentSection
