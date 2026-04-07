import { CornerDownRight } from 'lucide-react'

const NavBar = (props) => {
  return (
    <div className='flex items-center justify-between p-10'>
        <div>
            <p className='bg-black uppercase text-xs font-bold text-white p-2 w-fit rounded-full tracking-[.4rem]'> {props.heading} </p>
        </div>

        <div className='flex items-center bg-gray-100 p-2 rounded-full uppercase text-xs font-bold tracking-[.4rem] gap-2'>
            <CornerDownRight />
            <span> Digital Banking Platform</span>
        </div>
    </div>
  )
}

export default NavBar
