import React from 'react';
import {
  RiHome6Line,
  RiDashboardLine,
  RiShoppingCart2Line,
  RiLogoutBoxRLine,
  RiUser3Line,
} from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa6';

export default function Navbar() {
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
          <div className='hidden sm:flex flex-row gap-4 items-center'>
            <a className='btn btn-ghost normal-case text-md font-normal rounded text-base justify-center items-center'>
              <RiHome6Line className='text-2xl' /> Beranda
            </a>
            <a className='btn btn-ghost normal-case text-md font-normal rounded text-base justify-center items-center'>
              <RiDashboardLine className='text-2xl' /> Dasbor
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button className='btn btn-square btn-ghost normal-case text-md font-medium rounded'>
              <RiShoppingCart2Line className='text-2xl' />
            </button>
          </div>
          <div className='dropdown dropdown-bottom dropdown-end flex'>
            <div
              className='btn btn-ghost p-0 rounded hover:bg-white'
              tabIndex={0}
            >
              <div className='avatar'>
                <div className='w-12 rounded'>
                  <img
                    src='https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj'
                    alt='avatar'
                    className='w-full h-full object-cover rounded'
                  />
                </div>
              </div>
              <FaChevronDown />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-[13.5rem]'
            >
              <li className='flex sm:hidden'>
                <a
                  href='/'
                  className='rounded'
                >
                  <RiHome6Line className='text-2xl' /> Beranda
                </a>
              </li>
              <li className='flex sm:hidden'>
                <a
                  href='/'
                  className='rounded'
                >
                  <RiDashboardLine className='text-2xl' /> Dasbor
                </a>
              </li>
              <li>
                <a
                  href='/profil'
                  className='rounded'
                >
                  <RiUser3Line className='text-2xl' /> Profil
                </a>
              </li>
              <li>
                <a className='rounded'>
                  <RiLogoutBoxRLine className='text-2xl' /> Keluar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
