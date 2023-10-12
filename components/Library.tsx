'use client';

import React from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import SearchInput from './SearchInput';
import LibraryItem from './LibraryItem';

export default function Library() {
  const toggleModal = () => {
    const modal = document?.getElementById('library');
    modal?.toggleAttribute('open');
  };

  return (
    <>
      <button
        className='btn'
        onClick={toggleModal}
      >
        <BiFoodMenu className='text-2xl' />
      </button>
      <dialog
        id='library'
        className='modal'
      >
        <div className='modal-box overflow-hidden'>
          <form method='dialog'>
            <button className='btn btn-sm btn-square btn-ghost absolute right-2 top-2'>
              <RiCloseLine className='text-2xl' />
            </button>
          </form>
          <h3 className='font-bold text-lg text-center mb-4'>Kategori</h3>
          <SearchInput />
          <div className='flex flex-col gap-2 mt-2 overflow-y-auto h-96'>
            <LibraryItem />
          </div>
        </div>
      </dialog>
    </>
  );
}
