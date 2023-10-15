import React from 'react';

export default function SortBy() {
  return (
    <select className='select select-bordered w-44'>
      <option
        disabled
        selected
      >
        Urutkan
      </option>
      <option className='hover:bg-orange-600 hover:text-white'>Nama A-Z</option>
      <option>Nama Z-A</option>
      <option>Harga Tertinggi</option>
      <option>Harga Terendah</option>
    </select>
  );
}
