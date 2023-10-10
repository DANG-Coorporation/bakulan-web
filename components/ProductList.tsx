import React from 'react'
import Product from '@/components/Product'

export default function ProductList() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}