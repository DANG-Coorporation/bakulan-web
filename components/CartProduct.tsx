import React from 'react';
import { FaPlus, FaMinus, FaRegTrashCan } from 'react-icons/fa6';

export default function CartProduct() {
  return (
    <div className='flex flex-row p-4 border-b-2 border-gray-100 w-full gap-4'>
      <div className='aspect-square rounded h-24'>
        <img
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b.jpg'
          alt='ayam-bakar'
          className='h-full w-full object-cover rounded'
        />
      </div>
      <div className='flex flex-col justify-between items-start w-full'>
        <h3 className='text-lg font-semibold'>Ayam Bakar</h3>
        <p>Rp 25.000</p>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <button className='btn btn-square btn-sm bg-white border-gray-100 border-2 rounded'>
              <FaMinus />
            </button>
            <p>1</p>
            <button className='btn btn-square btn-sm bg-orange-600 text-white hover:bg-orange-700 rounded'>
              <FaPlus />
            </button>
          </div>
          <button className='btn btn-square btn-sm bg-white border-gray-100 border-2 rounded'>
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
}
