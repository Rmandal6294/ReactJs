import NavBar from '../Navbar_Section/NavBar'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page2Main = () => {
  return (
    <div className='w-full h-screen'>
      <NavBar heading = "Market Trends" />
      <div className='flex w-full h-[84vh] gap-6'>
            <LeftContent/>
            <RightContent/>
      </div>
    </div>
  )
}

export default Page2Main
