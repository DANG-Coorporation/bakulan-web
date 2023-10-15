'use client';

import React from 'react';
import { RiCloseLine, RiCashLine, RiBankCardLine } from 'react-icons/ri';
import PaymentTunai from './PaymentTunai';

export default function PaymentMethod() {
  const toggleModal = () => {
    const modal = document?.getElementById(
      'payment-method'
    ) as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <>
      <button
        className='btn w-full bg-orange-600 text-white hover:bg-orange-700 normal-case'
        onClick={toggleModal}
      >
        Metode Pembayaran
      </button>
      <dialog
        id='payment-method'
        className='modal'
      >
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-square btn-ghost absolute right-2 top-2'>
              <RiCloseLine className='text-2xl' />
            </button>
          </form>
          <h3 className='font-bold text-lg text-center mb-6'>
            Metode Pembayaran
          </h3>
          <div className='grid grid-cols-2 gap-8'>
            <PaymentTunai />
            <button className='btn btn-square btn-ghost normal-case aspect-square w-full h-full shadow-sm hover:shadow-md bg-base-200'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <RiBankCardLine className='text-3xl sm:text-4xl' />
                <p className='text-md sm:text-lg font-medium'>Non Tunai</p>
              </div>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
