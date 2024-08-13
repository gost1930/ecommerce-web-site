import React from 'react'
import { Category } from '../container'
import ProductsHome from '../container/ProductsHome/ProductsHome'
import { HotDeal, Services } from '../components'

const Home = () => {
  return (
    <>
      <Category />
      <ProductsHome />
      <HotDeal />
      <Services />
    </>
  )
}

export default Home;