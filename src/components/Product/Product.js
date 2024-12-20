import React from 'react'
import Fetch from '../Fetch/Fetch'

const Product = async () => {
    const data = await fetch('https://dummyjson.com/products')
    const products = await data.json()
  return (
    <section className='py-16 bg-[#F7F7F7]'>
        <div className="container">
            <div className='flex justify-center'>
                <h3 className='text-[42px] font-bold'>Best selling Product</h3>
            </div>
            <div>
                <Fetch data={products}/>
            </div>
        </div>
    </section>
  )
}

export default Product