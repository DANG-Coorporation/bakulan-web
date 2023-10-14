'use client';

import React, { useState } from 'react';
import { RiCloseLine, RiCashLine } from 'react-icons/ri';

export default function PaymentTunai() {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const toggleModal = () => {
    const modal = document?.getElementById(
      'payment-tunai'
    ) as HTMLDialogElement;
    modal?.showModal();
    closeModal();
  };

  const closeModal = () => {
    const modal = document?.getElementById(
      'payment-method'
    ) as HTMLDialogElement;
    modal?.close();
  };

  const handleSelectedButton = (price: string) => {
    setSelectedButton(price);
  };

  return (
    <>
      <button
        className='btn btn-square btn-ghost normal-case aspect-square w-full h-full shadow-md'
        onClick={toggleModal}
      >
        <div className='flex flex-col gap-2 justify-center items-center'>
          <RiCashLine className='text-4xl' />
          <p className='text-lg font-medium'>Tunai</p>
        </div>
      </button>
      <dialog
        id='payment-tunai'
        className='modal'
      >
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-square btn-ghost absolute right-2 top-2'>
              <RiCloseLine className='text-2xl' />
            </button>
          </form>
          <h3 className='font-bold text-lg text-center mb-6'>Rp 27.750</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <button
                  className={`btn btn-ghost normal-case w-full h-full border-2 border-gray-100 rounded ${
                    selectedButton === 'Rp 10.000'
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : ''
                  }`}
                  onClick={() => handleSelectedButton('Rp 10.000')}
                >
                  Rp 10.000
                </button>
                <button
                  className={`btn btn-ghost normal-case w-full h-full border-2 border-gray-100 rounded ${
                    selectedButton === 'Rp 20.000'
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : ''
                  }`}
                  onClick={() => handleSelectedButton('Rp 20.000')}
                >
                  Rp 20.000
                </button>
                <button
                  className={`btn btn-ghost normal-case w-full h-full border-2 border-gray-100 rounded ${
                    selectedButton === 'Rp 50.000'
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : ''
                  }`}
                  onClick={() => handleSelectedButton('Rp 50.000')}
                >
                  Rp 50.000
                </button>
                <button
                  className={`btn btn-ghost normal-case w-full h-full border-2 border-gray-100 rounded ${
                    selectedButton === 'Rp 100.000'
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : ''
                  }`}
                  onClick={() => handleSelectedButton('Rp 100.000')}
                >
                  Rp 100.000
                </button>
              </div>
              <input
                type='number'
                className='input input-bordered w-full rounded'
                placeholder='Masukkan jumlah uang'
              />
            </div>
            <button className='btn w-full bg-orange-600 text-white hover:bg-orange-700 normal-case rounded'>
              Bayar Sekarang
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
