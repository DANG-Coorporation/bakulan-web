import React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import CartProduct from './CartProduct';
import PaymentMethod from './PaymentMethod';

export default function Drawer() {
  return (
    <div className='drawer drawer-end'>
      <input
        id='drawer'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content'>
        <label
          htmlFor='drawer'
          className='drawer-button btn btn-square btn-ghost normal-case text-md font-medium rounded'
        >
          <RiShoppingCart2Line className='text-2xl' />
        </label>
      </div>
      <div className='drawer-side z-10'>
        <label
          htmlFor='drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div className='menu flex flex-col w-80 sm:w-[360px] h-screen justify-between min-h-full bg-white text-base-content'>
          <div className='flex flex-col overflow-auto'>
            <div className='flex flex-row justify-between items-center px-4 py-4 border-b-2 border-gray-100 h-[64px]'>
              <h2 className='text-xl font-semibold'>Detail Pesanan</h2>
              <p className='text-sm text-gray-500'>#28</p>
            </div>
            <CartProduct />
            <CartProduct />
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
              <PaymentMethod />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
