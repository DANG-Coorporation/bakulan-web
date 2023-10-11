import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <div className='grid grid-cols-12'>
      <main className='col-span-12 lg:col-span-8 xl:col-span-8'>
        <Navbar />
        <div>
          <ProductList />
        </div>
      </main>
      <aside className='hidden lg:grid lg:col-span-4 xl:col-span-4 border-l-2 border-gray-100'>
        <Cart />
      </aside>
    </div>
  );
}
