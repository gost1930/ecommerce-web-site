import Products from "../../components/Products/Products"
import Links from "../Category/Links"

const ProductsHome = () => {
  return (
    <section className="flex flex-col w-full px-10 mt-10">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-3xl">المنتجات</h1>
        <div className="flex flex-row items-center">
        <Links title={'حاسوب'} />
        <Links title={'هواتف'} />
        <Links title={'كاميرا'} />
        <Links title={'إكسسوار'} />
        </div>
      </div>
      <Products />

    </section>
  )
}

export default ProductsHome