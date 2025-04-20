import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBottom() {
  const pathName = usePathname();
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
      href: '/contact',
    },
    {
      id: 4,
      name: 'درباره ما',
      href: '/about',
    },
  ]);
  return (
    <div className='w-full grid grid-cols-12 py-2.5'>
      <div className='col-span-12 hidden lg:block'>
        <ul className='flex items-center gap-x-8 my-5'>
          {data.map((val) => (
            <li key={val.id}>
              <Link
                href={val.href}
                className={`font-medium text-[16px] ${
                  pathName === val.href ? 'text-[#CB1B1B]' : 'text-[#121212]'
                }`}
              >
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex col-span-12 lg:hidden md:place-items-center'>
        <input
          type='search'
          className='w-full md:w-full p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED] flex lg:hidden'
          placeholder='جستجو  فرش'
        />
      </div>
    </div>
  );
}
