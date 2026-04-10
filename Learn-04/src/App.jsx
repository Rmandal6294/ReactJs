import FromHandling from "./From_Handaling/FromHandling"
import TwoWayBinding from "./From_Handaling/TwoWayBinding"

const App = () => {
  return (
    <div className="w-full h-screen flex justify-between item-center">
        <FromHandling/>
        <TwoWayBinding/>
    </div>
  )
}

export default App
