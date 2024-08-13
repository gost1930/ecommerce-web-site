import { IoIosClose } from "react-icons/io";
import img from '../../assets/pro1.png'
const Products = () => {
  return (
    <div className="flex flex-row justify-evenly">
            <div className=" relative">
                <img src={img} alt="" className="w-16" />
                <IoIosClose className="top-0 right-0 absolute cursor-pointer" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-sm font-medium">اسم المنتج</h1>
                <h1 className="text-sm"><span>1x   </span> 2999DZ</h1>
            </div>
        </div>
  )
}

export default Products
