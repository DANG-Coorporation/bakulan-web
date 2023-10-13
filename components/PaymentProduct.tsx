import React from 'react';
import { FaPlus, FaMinus, FaRegTrashCan } from 'react-icons/fa6';

export default function PaymentProduct() {
  return (
    <div className='flex flex-row p-4 border-b-2 border-gray-100 w-full gap-4'>
      <div className='aspect-square rounded h-24'>
        <img
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b.jpg'
          alt='Ayam Bakar'
          className='h-full w-full object-cover rounded'
        />
      </div>
      <div className='flex flex-col justify-between items-start w-full'>
        <h3 className='text-lg font-semibold'>Ayam Bakar</h3>
        <div className='flex flex-row justify-between items-center w-full'>
          <p>2</p>
          <p>Rp 25.000</p>
        </div>
      </div>
    </div>
  );
}
