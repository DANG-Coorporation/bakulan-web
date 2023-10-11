import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8 xl:col-span-9 p-4'>
          <ProductList />
        </div>
        <aside className='col-span-12 md:col-span-4 xl:col-span-3 border-l-2 border-gray-100'>
          <Cart />
        </aside>
      </main>
    </>
  );
}
