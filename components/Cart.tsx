'use client';

import React from 'react';
import CartProduct from './CartProduct';
import PaymentMethod from './PaymentMethod';

export default function Cart() {
  return (
    <div className='flex flex-col w-[360px] h-screen justify-between sticky top-0 overflow-y-auto bg-base-100'>
      <div className='flex flex-col overflow-auto'>
        <div className='flex flex-row justify-between items-center px-4 py-4 h-[64px]'>
          <h2 className='text-xl font-semibold'>Detail Pesanan</h2>
          <p className='text-sm text-gray-500'>#28</p>
        </div>
        <CartProduct />
        <CartProduct />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col p-4 gap-2 '>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-gray-500'>Harga Normal</p>
            <p className='text-gray-500'>Rp 25.000</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-gray-500'>PPN 11%</p>
            <p className='text-gray-500'>Rp 2.750</p>
          </div>
        </div>
        <div className='flex flex-row p-4 justify-between items-center'>
          <p className='font-semibold'>Total</p>
          <p className='font-semibold'>Rp 27.750</p>
        </div>
        <div className='flex p-4 justify-center items-center'>
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}
