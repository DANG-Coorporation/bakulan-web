import React from 'react';

export default function Cart() {
  return (
    <div className='flex flex-col w-full h-screen justify-between'>
      <div className='flex flex-row justify-between items-center p-4 border-b-2 border-gray-100'>
        <h2 className='text-xl font-semibold'>Detail Pesanan</h2>
        <p className='text-sm text-gray-500'>#28</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col p-4 gap-2 border-y-2 border-gray-100'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-gray-500'>Harga Normal</p>
            <p className='text-gray-500'>Rp 25.000</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-gray-500'>PPN 11%</p>
            <p className='text-gray-500'>Rp 2.750</p>
          </div>
        </div>
        <div className='flex flex-row p-4 justify-between items-center border-b-2 border-gray-100'>
          <p className='font-semibold'>Total</p>
          <p className='font-semibold'>Rp 27.750</p>
        </div>
        <div className='flex p-4 justify-center items-center'>
          <button className='btn w-full bg-orange-600 text-white hover:bg-orange-700 normal-case'>
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
