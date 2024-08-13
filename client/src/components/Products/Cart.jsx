import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({img , category , title , price , oldPrice }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg max-w-xs my-1 mx-auto">
    <div className="relative">
      <img src={img} alt="Product" className="w-full h-auto" />
      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-bl-lg">
        -30%
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="text-gray-500 text-sm">{category}</div>
      <div className="text-xl font-bold my-2">{title}</div>
      <div className="text-red-500 text-lg font-semibold">${price}</div>
      <div className="text-gray-500 line-through">${oldPrice}</div>
    </div>
    <div className="flex justify-evenly mt-4 text-gray-500">
      <Link to="/product-details" className=' rounded-full shadow-sm shadow-gray-400 p-3 hover:-translate-y-1 duration-200 hover:bg-red-500 group'><IoEyeSharp className='group-hover:text-white' /></Link>
      <Link to="/" className=' rounded-full shadow-sm shadow-gray-400 p-3 hover:-translate-y-1 duration-200 hover:bg-red-500 group'><FaCartPlus className='group-hover:text-white' /></Link>
    </div>
  </div>
  )
}

export default Cart
