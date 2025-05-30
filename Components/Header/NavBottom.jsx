import { NavLinks } from '@/Data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
function NavBottom() {
  const pathName = usePathname();
  return (
    <div className='grid grid-cols-12 py-2.5 w-full'>
      <div className='hidden lg:block col-span-12'>
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
      <div className='lg:hidden flex md:place-items-center col-span-12'>
        <input
          type='search'
          className='bg-[#EDEDED] p-3 border-0 rounded-[12px] outline-0 w-full text-[#cb1b1b]'
          title='جستجو  فرش'
          placeholder='جستجو فرش'
        />
      </div>
    </div>
  );
}
export default memo(NavBottom);
