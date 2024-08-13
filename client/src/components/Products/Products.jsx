import axios from 'axios';
import Cart from "./Cart";
import Spinner from '../Spinner/Spinner'
import { useEffect, useState } from 'react';
import noImage from '../../assets/No_image_available.svg.png'


const Products =  () => {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(()=>{

      // create function to get all products from the back end 
      const fetchProducts = async () =>{
        try{
          // call the back end
          const response =  await axios.get('http://localhost:3001/')
          // set the data on products useState
          setProducts(response.data)
          // set the loading to false if the data was fetching successfully
          setLoading(false)
        } catch(error){
          console.log('Error fetching products:', error)
          // set the loading true if the data was not fetching successfully
          setLoading(true)
        };
        
      }
      // call the function to run 
      fetchProducts();
    },[])
  return (
    <section className="flex flex-col md:flex-row flex-wrap my-10">

      {loading ? <Spinner /> :
      products.map(({title , price , img} , index)=>(
        <Cart key={index} 
        img={img? img : noImage} 
        category={'d'}
         title={title}
          price={price}
           oldPrice={'111'}  />
    ) )}
       
    </section>
  )
}

export default Products
