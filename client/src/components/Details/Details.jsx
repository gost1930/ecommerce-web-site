import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const Details = () => {
  const [value, setValue] = useState(1);
  const [add, setAdd] = useState(false);

  const Plus = () => setValue(prev => prev + 1);
  const minse = () => setValue(prev => (prev > 0 ? prev - 1 : 0));

  const addProduct = () => {
    setAdd(prev => !prev);
    if (!add) {
      setTimeout(() => {
        setAdd(false);
      }, 2000);
    }
  };

  return (
    <section className="flex flex-col w-full md:w-1/2 items-start h-fit p-10">
      <div className="text-xl font-bold my-2">حاسوب samsung</div>
      <div className="text-gray-500 text-sm">حاسوب</div>
      <div className="text-red-500 text-lg font-semibold">4000 DA</div>
      <div className="text-gray-500 line-through">3500 DA</div>
      <div className="flex flex-row items-center my-2">
        <button onClick={Plus} className="p-2 border border-red-500 hover:bg-red-500 hover:text-white rounded duration-200 mx-1">+</button>
        <p>{value}</p>
        <button onClick={minse} className="p-2 border border-red-500 hover:bg-red-500 hover:text-white rounded duration-200 mx-1">-</button>
      </div>
      <div className="w-full group p-2">
        <button onClick={addProduct} className="py-1 px-2 bg-red-500 hover:bg-red-600 text-white hover:rounded-full my-2 duration-300 self-center animate-bounce w-full hover:animate-none">
          أضف إلى السلة
        </button>
      </div>

      <div
        id="addP"
        className={`${
          add ? 'flex' : 'hidden'
        } bg-white border-t-4 border-red-600 rounded-b text-red-600 px-4 py-3 shadow-md absolute top-0 left-[50%]`}
        role="alert"
      >
        <div className='flex flex-col'>
          <div className="flex flex-row items-center py-1 mx-1">
          <FaCartArrowDown />
            <p className="font-bold">تم اضافة المنتج بنجاح</p>
          </div>
          <div className="close h-1 bg-red-500"></div>
        </div>
      </div>

    </section>
  );
}

export default Details;
