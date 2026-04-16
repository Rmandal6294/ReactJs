import SelectTheme from "../ChildrenProps/SelectTheme"

const Header = (props) => {
  return (
    <div id = {props.theme} className="flex items-center justify-between gap-10 px-10 py-10">
        <div className="text-4xl">
            MyCompany
        </div>
        <div className="flex gap-10 text-2xl">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Services</p>
            <SelectTheme setTheme={props.setTheme}/>
        </div>
    </div>
  )
}

export default Header
