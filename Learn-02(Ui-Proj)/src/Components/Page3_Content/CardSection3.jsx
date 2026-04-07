import { ShoppingCart } from "lucide-react"

const CardSection3 = (props) => {
  return (
    <div className={`${props.color} rounded-2xl flex flex-col items-center justify-center gap-2.5 min-h-60 min-w-60 w-80 text-white text-lg text-bold`}>
        <ShoppingCart size={42} />
        <p className="">Trends of moving <br/> from retail to e-Tail</p>
      </div>
  )
}

export default CardSection3
