'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from '@/components/PaymentForm';
import PaymentSummary from '@/components/PaymentSummary';
import Navbar from '@/components/Navbar';

export default function Payments() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <Navbar />
      <div className='grid grid-cols-12 gap-4 w-full p-4 h-screen'>
        <div className='col-span-12 md:col-span-7'>
          <PaymentForm />
        </div>
        <div className='col-span-12 md:col-span-5 h-fit'>
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
}
