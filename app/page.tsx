import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <>
      <header></header>
      <main className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='flex flex-row gap-4 justify-between items-center'>
          <h1 className='text-2xl font-semibold'>Bakulan</h1>
          <ThemeSwitch />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
