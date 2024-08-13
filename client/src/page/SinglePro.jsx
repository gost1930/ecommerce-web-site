import { Products } from "../components"
import { ProDetail } from "../container"

const SinglePro = () => {
  return (
    <>
      <ProDetail />
      <hr className="my-10" />
      <section className='flex flex-col w-full '>
    <h1 className="text-3xl font-light">المنجات ذات صلة</h1> 
      <Products />
    </section>
    </>
  )
}

export default SinglePro
