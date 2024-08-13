import { IoIosClose } from "react-icons/io";
import Products from "./Products";

const Cart = ({ change, close }) => {
  return (
    <div className={`${change ? 'flex' : 'hidden'} absolute z-50 left-10 top-32 bg-white flex-col overflow-auto w-60 duration-200`}>
      <div className="flex flex-col h-44 w-full overflow-y-scroll">
        {/* Products start */}
        <Products />
        <Products />
        <Products />
        {/* Products end */}
      </div>
      <hr />
      <div className="flex flex-col w-full p-2">
        <p>3 منتجات</p>
        <p>المجموع : 5000 DA</p>
      </div>
      <div className="flex flex-row w-full">
        <a href="#" className="w-1/2 text-center px-3 py-2 bg-slate-900 text-white">البطاقة</a>
        <a href="#" className="w-1/2 text-center px-3 py-2 bg-red-500 text-white">تأكيد</a>
      </div>
      <IoIosClose onClick={close} className="top-1 right-0 absolute cursor-pointer text-white text-2xl bg-red-500 hover:bg-red-600" />
    </div>
  );
};

export default Cart;
