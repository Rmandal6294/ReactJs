import NavBar from "../Navbar_Section/NavBar"
import LeftContentSection from "./LeftContentSection"
import RightContentSection from "./RightContentSection"

const Page3Main = () => {
  return (
    <div className='w-full h-screen'>
      <NavBar heading = "Market Opportunity" />
      <div className='flex w-full h-[84vh] gap-6'>
            <LeftContentSection/>
            <RightContentSection/>
      </div>
    </div>
  )
}

export default Page3Main
