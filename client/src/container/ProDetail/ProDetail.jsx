import React from 'react'
import { Details, SlideImg } from '../../components'

const ProDetail = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row justify-center items-start w-full'>
      <SlideImg />
      <Details />
    </section>
    </>
  )
}

export default ProDetail
