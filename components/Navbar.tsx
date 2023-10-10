'use client';

import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaRegClock, FaRegCalendar } from 'react-icons/fa6';
import { RiHome6Line } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import moment from 'moment';

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(moment().format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('LTS'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className='navbar px-4 justify-between grid grid-cols-12 gap-8 border-b-2 border-gray-50 shadow-xs'>
      <div className='col-span-12 md:col-span-8 xl:col-span-9 justify-between'>
        <a
          href='/'
          className='btn btn-ghost normal-case text-xl'
        >
          Bakulan
        </a>
        <div className='flex flex-row gap-4 items-center'>
          <a className='btn btn-ghost normal-case text-md font-medium'>
            <RiHome6Line /> Beranda
          </a>
          <a className='btn btn-ghost normal-case text-md font-medium'>
            <RxDashboard /> Dasbor
          </a>
        </div>
      </div>
      <div className='col-span-12 md:col-span-4 xl:col-span-3 justify-between'>
        <div className='flex flex-row gap-8 items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <FaRegClock />
            <p className='font-light text-sm'>{currentTime}</p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaRegCalendar />
            <p className='font-light text-sm'>{moment().format('LL')}</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <div className='indicator'>
            <span className='indicator-item indicator-bottom indicator-end'>
              <FaChevronDown className='text-sm text-white  bg-orange-600 rounded p-0.5 justify-center items-center' />
            </span>
            <div className='avatar'>
              <div className='w-12 rounded'>
                <img
                  src='https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj'
                  alt='avatar'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
