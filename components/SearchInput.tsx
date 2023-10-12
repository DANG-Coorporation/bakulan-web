import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput() {
  return (
    <div className='join'>
      <input
        className='input input-bordered join-item'
        placeholder='Search'
      />
      <button className='btn btn-square join-item rounded'>
        <RiSearchLine />
      </button>
    </div>
  );
}
