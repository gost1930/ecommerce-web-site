import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Links = ({list , button , click}) => {
  return (
    <>
    <li className={list}><Link to="/" className={button}>الرئيسية</Link></li>
    <li className={list}><Link to="/" className={button}>التخفيضات</Link></li>
    <li className={list}><Link to="/" className={button}>المنتجات</Link></li>
    <li className={list}><Link to="/" className={button}>من نحن</Link></li>
    <li className={list}><Link to="/" className={button}>إتصل بنا</Link></li>
    <li onClick={click} className={`${list}  relative cursor-pointer`}><FiShoppingCart className="text-white text-xl" />
    <span className=" absolute -top-3 -right-3 bg-red-500 rounded-full text-white text-[11px] px-[5px]">5</span>
    </li>
    </>
  )
}

export default Links;