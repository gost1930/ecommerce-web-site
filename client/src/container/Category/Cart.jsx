import { FaArrowCircleLeft } from "react-icons/fa";


const Cart = ({img , title1}) => {
  return (
    <>
    <a className=' relative overflow-hidden w-[60%] md:mx-7 cursor-pointer group '>
        <div className="flex  my-1   bg-gray-200 cat__cart-befor cat__cart-after min-w-full min-h-full overflow-hidden">
        <img src={img} alt="" className=' group-hover:scale-[1.1] duration-300  min-w-full min-h-full' />
        <h1  className=' absolute left-14 md:text-3xl top-8 text-white font-bold z-10'>{title1}
        <br /></h1>
        <a  className=' absolute left-14 text-sm top-10 mt-10 text-white font-normal z-10 flex flex-row items-center hover:underline'> تسوق الآن<FaArrowCircleLeft /></a>
        </div>
    </a>

    </>
  )
}

export default Cart
