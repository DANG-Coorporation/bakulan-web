import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Pagination from '@/components/Pagination';

export default function Home() {
  return (
    <div className='flex'>
      <main className='flex flex-col justify-center items-center'>
        <Navbar />
        <ProductList />
        <Pagination />
      </main>
      <aside className='hidden lg:flex'>
        <Cart />
      </aside>
    </div>
  );
}
