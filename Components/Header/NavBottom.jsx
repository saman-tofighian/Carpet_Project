import { NavLinks } from '@/Data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
function NavBottom() {
  const pathName = usePathname();
  return (
    <div className='w-full grid grid-cols-12 py-2.5'>
      <div className='col-span-12 hidden lg:block'>
        <ul className='flex items-center gap-x-8 my-5'>
          {NavLinks.map((val) => (
            <li key={val.id}>
              <Link
                href={val.href}
                className={`font-bold text-[18px] ${
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
          className='w-full p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED]'
          placeholder='جستجو  فرش'
        />
      </div>
    </div>
  );
}
export default memo(NavBottom);
