import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="mx-4">
      <form className="max-w-full">
        <div className=" relative">
        <input type="text" name="" id="" className='rounded-full py-[3px] md:py-1' />
        <IoMdSearch className="text-red-500 absolute top-2 right-3 " />
        </div>
      </form>
    </div>
  )
}

export default Search;