import React from 'react';
import Navbar from '@/components/Navbar';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Pagination from '@/components/Pagination';
import SearchInput from '@/components/SearchInput';
import SortBy from '@/components/SortBy';
import Library from '@/components/Library';

export default function Home() {
  return (
    <div className='flex'>
      <main className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex flex-row flex-wrap md:flex-nowrap items-center justify-between w-full p-4 gap-4 md:gap-28'>
          <div className='flex w-full'>
            <SearchInput />
          </div>
          <div className='flex flex-row items-center gap-4 w-full md:w-fit justify-between'>
            <Library />
            <SortBy />
          </div>
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
