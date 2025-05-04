'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

export default function NavMobile({ isOpen, setIsOpen }) {
  const [data] = useState([
    {
      id: 1,
      name: 'صفحه اصلی',
      href: '/',
    },
    {
      id: 2,
      name: 'وبلاگ',
      href: '/blog',
    },
    {
      id: 3,
      name: 'تماس با ما',
      href: '/contactus',
    },
    {
      id: 4,
      name: 'درباره ما',
      href: '/about',
    },
  ]);
  const pathName = usePathname();
  return (
    <section
      className={`
        fixed top-0 right-0 w-full h-full z-50 lg:hidden
        transition-all duration-1000 ease-linear
        ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }
      `}
    >
      <div
        className={`
          absolute inset-0 bg-black transition-opacity duration-1000 ease-linear
          ${isOpen ? 'opacity-70' : 'opacity-0'}
        `}
      ></div>
      <div
        className={`
          absolute top-0 right-0 w-[80%] sm:w-[60%] h-full bg-white 
          transition-transform duration-1000 ease-linear 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col
        `}
      >
        <div className='w-full mt-6 px-[6%]'>
          <button
            className='rounded-[8px] text-[#CB1B1B] p-3.5 bg-[#EDEDED] flex justify-center items-center cursor-pointer font-extrabold'
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineClose size='2rem' />
          </button>
        </div>

        <ul className='flex flex-col items-center my-10 gap-y-10 text-center'>
          {data.map((val) => (
            <li className='w-full' key={val.id}>
              <Link
                href={val.href}
                className={`font-medium text-[20px] ${
                  pathName === val.href ? 'text-[#CB1B1B]' : 'text-[#121212]'
                }`}
              >
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
