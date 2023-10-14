'use client';

import React from 'react';

export default function PaymentConfirm({ setSelectedButton }: any) {
  const toggleModal = () => {
    const modal = document?.getElementById(
      'payment-confirm'
    ) as HTMLDialogElement;
    modal?.showModal();
    closeModal();
    setSelectedButton('');
  };

  const closeModal = () => {
    const modal = document?.getElementById(
      'payment-tunai'
    ) as HTMLDialogElement;
    modal?.close();
  };

  return (
    <>
      <button
        className='btn w-full bg-orange-600 text-white hover:bg-orange-700 normal-case rounded'
        onClick={toggleModal}
      >
        Bayar Sekarang
      </button>
      <dialog
        id='payment-confirm'
        className='modal'
      >
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-center mb-6'>
            Sisa Uang Tunai
          </h3>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-4xl text-center p-4'>Rp 27.750</h3>
              <p className='text-center text-sm'>dari total Rp 50.000</p>
            </div>
            <form method='dialog'>
              <button className='btn w-full bg-orange-600 text-white hover:bg-orange-700 normal-case rounded'>
                Kembali ke Beranda
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
