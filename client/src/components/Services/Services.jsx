import Cart from "./Cart"
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const Services = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-evenly 
    items-center w-full p-10 py-3 mt-5 bg-slate-800">
      <Cart icon={<FaTruckFast />} title={'التوصيل السريع'} />
      <Cart icon={<MdOutlineSupportAgent />} title={'خدمة دعم العملاء'} />
      <Cart icon={<AiOutlineLike />} title={'أفضل الاسعار'} />
    </section>
  )
}

export default Services
