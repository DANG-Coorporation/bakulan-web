import React from 'react';
import PaymentProduct from './PaymentProduct';

export default function PaymentSummary() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col'>
        <div className='flex p-4'>
          <h2 className='text-xl font-semibold'>Detail Pesanan</h2>
        </div>
        <div className='flex flex-col gap-2'>
          <PaymentProduct />
        </div>
      </div>
      <div className='flex flex-col gap-2 border-t-2 border-gray-100'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between px-4 py-2'>
            <p className='text-gray-500'>Subtotal</p>
            <p className='text-gray-500'>Rp 50.000</p>
          </div>
          <div className='flex flex-row justify-between px-4 py-2'>
            <p className='text-gray-500'>PPN 11%</p>
            <p className='text-gray-500'>Rp 5.500</p>
          </div>
        </div>
        <div className='flex flex-row justify-between p-4 border-t-2 border-gray-100'>
          <p className='text-lg font-semibold'>Total</p>
          <p className='text-lg font-semibold'>Rp 100.000</p>
        </div>
      </div>
    </div>
  );
}
