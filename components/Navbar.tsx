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
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className='navbar px-4 justify-between gap-4 border-b-2 border-gray-100'>
      <div className='flex flex-row gap-4 items-center w-full justify-between'>
        <a
          href='/'
          className='btn btn-ghost normal-case text-xl '
        >
          Bakulan
        </a>
        <div className='flex flex-row gap-4 items-center'>
          <a className='btn btn-ghost normal-case text-md font-medium '>
            <RiHome6Line /> Beranda
          </a>
          <a className='btn btn-ghost normal-case text-md font-medium '>
            <RxDashboard /> Dasbor
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <p className='font-light text-sm'>
            {currentTime} &bull; {moment().format('L')}
          </p>
        </div>
      </div>
      <div className='justify-between'>
        <div className='avatar'>
          <div className='w-12 rounded'>
            <img
              src='https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj'
              alt='avatar'
              className='w-full h-full object-cover rounded'
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
