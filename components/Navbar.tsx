import React from 'react';
import {
  RiHome6Line,
  RiDashboardLine,
  RiLogoutBoxRLine,
  RiUser3Line,
} from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import Drawer from './Drawer';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <nav className='navbar px-4 justify-between gap-4 sticky top-0 z-10 bg-base-100 shadow-sm'>
      <div className='flex flex-row gap-4 items-center w-full justify-between'>
        <Link
          href='/'
          className='btn btn-ghost normal-case text-xl '
        >
          Bakulan
        </Link>
        <div className='flex flex-row items-center'>
          <div className='hidden sm:flex flex-row gap-4 items-center'>
            <Link
              href='/'
              className='btn btn-ghost normal-case text-md font-normal text-base justify-center items-center'
            >
              <RiHome6Line className='text-2xl' /> Beranda
            </Link>
            <Link
              href='/dashboard'
              className='btn btn-ghost normal-case text-md font-normal text-base justify-center items-center'
            >
              <RiDashboardLine className='text-2xl' /> Dasbor
            </Link>
          </div>
          <ThemeSwitch />
          <div className='flex mx-4 lg:mx-2'>
            <Drawer />
          </div>
          <div className='dropdown dropdown-bottom dropdown-end flex'>
            <div
              className='btn btn-ghost p-0 rounded-lg hover:bg-base-100'
              tabIndex={0}
            >
              <div className='avatar'>
                <div className='w-12 rounded-lg'>
                  <img
                    src='https://yt3.googleusercontent.com/YaJHh5SnF1sCzOnWvyXv2oF9aNZCHBBa6yBiqq_2OBF6zF2xM0_n60Y2nBe5tRQU_2qmXpr2=s900-c-k-c0x00ffffff-no-rj'
                    alt='avatar'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              </div>
              <FaChevronDown />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-[13.5rem] mt-2 gap-2'
            >
              <li className='flex sm:hidden'>
                <Link
                  href='/'
                  className='rounded'
                >
                  <RiHome6Line className='text-2xl' /> Beranda
                </Link>
              </li>
              <li className='flex sm:hidden'>
                <Link
                  href='/dashboard'
                  className='rounded'
                >
                  <RiDashboardLine className='text-2xl' /> Dasbor
                </Link>
              </li>
              <li>
                <Link
                  href='/profile'
                  className='rounded'
                >
                  <RiUser3Line className='text-2xl' /> Profil
                </Link>
              </li>
              <li>
                <Link
                  href='/login'
                  className='rounded'
                >
                  <RiLogoutBoxRLine className='text-2xl' /> Keluar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
