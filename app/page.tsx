import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <div className='flex'>
      <main className='flex flex-col'>
        <Navbar />
        <ProductList />
      </main>
      <aside className='hidden lg:flex'>
        <Cart />
      </aside>
    </div>
  );
}
