import Cart from "./Cart"
import img1 from '../../assets/laptop.png'
import img2 from '../../assets/casque.png'
import img3 from '../../assets/camera.png'

const Category = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-around 
    items-center w-full py-10 md:px-5">
        <Cart title1={'حاسوب'} img={img1} />
        <Cart title1={'إكسسوارات'}  img={img2} />
        <Cart title1={'كاميرا'}  img={img3} />
    </section>
  )
}

export default Category;
