import Link from 'next/link';
import { memo } from 'react';
import { CiLogin } from 'react-icons/ci';
import { IoIosLogIn } from 'react-icons/io';
import { SlBasket } from 'react-icons/sl';
import { VscListSelection } from 'react-icons/vsc';
import { useCart } from '../../context/CartContext ';
function NavTop({ openMobileOpen }) {
  const { count } = useCart();
  return (
    <div className='w-full grid grid-cols-12'>
      <div className='col-span-7 lg:col-span-9 flex items-center gap-x-6'>
        <span className='text-[19px] sm:text-2xl text-[#CB1B1B] font-bold order-2 lg:order-1'>
          ایـــرانی فرش
        </span>
        <input
          type='search'
          className='w-[448px] max-w-[448px] p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED] hidden lg:flex order-2'
          placeholder='جستجو  فرش'
        />
        <button
          className='rounded-[8px] text-[#121212] p-3.5 bg-[#EDEDED] flex lg:hidden justify-center items-center text-center cursor-pointer font-extrabold order-1'
          onClick={openMobileOpen}
        >
          <VscListSelection size='1.4rem' />
        </button>
      </div>
      <div className='col-span-5 lg:col-span-3 flex items-center gap-x-4 justify-end'>
        <Link
          href='/shopping'
          className='relative border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5 flex justify-center items-center hover:bg-[#cb1b1b] hover:text-white transition duration-700'
        >
          <SlBasket size='1.4rem' />
          {count > 0 && (
            <div className='w-[15px] h-[15px] rounded-full absolute top-[-.1px] right-3.5 border border-white bg-[#CB1B1B] text-white text-[12px] font-bold flex justify-center items-center shadow-lg'>
              {count}
            </div>
          )}
        </Link>

        <Link
          href='/register'
          className='border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5 flex xl:hidden justify-center items-center hover:bg-[#cb1b1b] hover:text-white transition duration-700'
        >
          <IoIosLogIn size='1.4rem' />
        </Link>

        <Link
          href='/register'
          className='hidden xl:flex items-center gap-2 px-5 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hover:bg-[#cb1b1b] hover:text-white transition duration-700'
        >
          <CiLogin size='1.4rem' /> ورود / ثبت نام
        </Link>
      </div>
    </div>
  );
}
export default memo(NavTop);
