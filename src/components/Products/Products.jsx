import Cart from "./Cart"
import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.png'
import pro5 from '../../assets/pro5.png'
const Products = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap my-10">
      <Cart img={pro1} category={'حاسوب'} title={'حاسوب dell'} price={'5000'} oldPrice={'4500'}  />
      <Cart img={pro2} category={'إكسسوار'} title={'سماعات رأسية'} price={'5000'} oldPrice={'4500'}  />
      <Cart img={pro3} category={'حاسوب'} title={'حاسوب samsung'} price={'5000'} oldPrice={'4500'}  />
      <Cart img={pro4} category={'تابلات'} title={'تابلات huawei'} price={'5000'} oldPrice={'4500'}  />
      <Cart img={pro5} category={'إكسسوار'} title={'سماعات sony'} price={'5000'} oldPrice={'4500'}  />
      <Cart img={pro3} category={'حاسوب'} title={'حاسوب lenovo'} price={'5000'} oldPrice={'4500'}  />
    </section>
  )
}

export default Products
