import React from 'react';

export default function Product() {
  return (
    <div className='card card-compact shadow-xs aspect-square hover:shadow-sm border-2 border-gray-50 cursor-pointer'>
      <figure className='aspect-video'>
        <img
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b.jpg'
          alt='Ayam Crispy'
          className='h-full w-full object-cover'
        />
      </figure>
      <div className='card-body justify-center items-center'>
        <h2 className='card-title text-lg'>Ayam Crispy</h2>
        <p className='text-orange-600'>Rp 10.000</p>
      </div>
    </div>
  );
}
