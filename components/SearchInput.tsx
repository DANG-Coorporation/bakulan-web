import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput() {
  return (
    <div className='join w-full'>
      <input
        className='input input-bordered join-item w-full rounded'
        placeholder='What are you searching for?'
      />
      <button className='btn btn-square join-item rounded'>
        <RiSearchLine />
      </button>
    </div>
  );
}
