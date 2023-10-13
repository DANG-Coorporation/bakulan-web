import React from 'react';

export default function PaymentForm() {
  return (
    <div className='flex flex-col gap-4 w-full p-4'>
      <h2 className='text-xl font-semibold'>Metode Pembayaran</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            <button className='btn btn-lg normal-case text-md font-medium rounded'>
              Rp 10.000
            </button>
            <button className='btn btn-lg normal-case text-md font-medium rounded'>
              Rp 20.000
            </button>
            <button className='btn btn-lg normal-case text-md font-medium rounded'>
              Rp 50.000
            </button>
            <button className='btn btn-lg normal-case text-md font-medium rounded'>
              Rp 100.000
            </button>
          </div>
          <input
            type='number'
            className='input input-bordered rounded input-lg'
            placeholder='Masukkan jumlah uang'
          />
        </div>
        <button className='btn btn-lg normal-case justify-between text-md font-medium rounded'>
          <p>Kredit/Kartu Kredit</p>
          <div className='flex'>VISA</div>
        </button>
        <button className='btn btn-lg normal-case justify-between text-md font-medium rounded'>
          <p>Kredit/Kartu Kredit</p>
          <div className='flex'>VISA</div>
        </button>
      </div>
      <button className='btn btn-lg normal-case text-md font-medium rounded bg-orange-600 text-white hover:bg-orange-700'>
        Bayar Sekarang
      </button>
    </div>
  );
}
