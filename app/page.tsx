import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Pagination from '@/components/Pagination';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <div className='flex'>
      <main className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex flex-row items-center justify-between w-full px-4 py-2'>
          <SearchInput />
        </div>
        <ProductList />
        <Pagination />
      </main>
      <aside className='hidden lg:flex'>
        <Cart />
      </aside>
    </div>
  );
}
