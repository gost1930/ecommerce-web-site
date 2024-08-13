import { FaTruckFast } from "react-icons/fa6";

const Cart = ({icon , title}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl self-center mb-2 text-white">{icon}</h1>
        <h2 className="text-xl text-white">{title}</h2>
    </div>
  )
}

export default Cart
