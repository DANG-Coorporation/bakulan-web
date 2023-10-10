import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';

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
        <div className='col-span-12 md:col-span-4 xl:col-span-3'>Sidebar</div>
      </main>
      <footer></footer>
    </>
  );
}
