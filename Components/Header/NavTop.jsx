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
    <div className='grid grid-cols-12 w-full'>
      <div className='flex items-center gap-x-6 col-span-7 lg:col-span-9'>
        <span className='order-2 lg:order-1 font-bold text-[#CB1B1B] text-[19px] sm:text-2xl'>
          ایـــرانی فرش
        </span>
        <input
          type='search'
          className='hidden lg:flex order-2 bg-[#EDEDED] p-3 border-0 rounded-[12px] outline-0 w-[448px] max-w-[448px] text-[#cb1b1be5]'
          placeholder='جستجو  فرش'
        />
        <button
          className='lg:hidden flex justify-center items-center order-1 bg-[#EDEDED] p-3.5 rounded-[8px] font-extrabold text-[#121212] text-center cursor-pointer'
          onClick={openMobileOpen}
          title='HamgurgerMenu'
        >
          <VscListSelection size='1.4rem' />
        </button>
      </div>
      <div className='flex justify-end items-center gap-x-4 col-span-5 lg:col-span-3'>
        <Link
          href='/shopping'
          className='relative flex justify-center items-center hover:bg-[#cb1b1b] px-3 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hover:text-white transition duration-700'
          title='Basket'
        >
          <SlBasket size='1.4rem' />
          {count > 0 && (
            <div className='top-[-.1px] right-3.5 absolute flex justify-center items-center bg-[#CB1B1B] shadow-lg border border-white rounded-full w-[15px] h-[15px] font-bold text-[12px] text-white'>
              {count}
            </div>
          )}
        </Link>

        <Link
          href='/register'
          className='xl:hidden flex justify-center items-center hover:bg-[#cb1b1b] px-3 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hover:text-white transition duration-700'
          title='LogIn'
        >
          <IoIosLogIn size='1.4rem' />
        </Link>

        <Link
          href='/register'
          className='hidden xl:flex items-center gap-2 hover:bg-[#cb1b1b] px-5 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hover:text-white transition duration-700'
        >
          <CiLogin size='1.4rem' /> ورود / ثبت نام
        </Link>
      </div>
    </div>
  );
}
export default memo(NavTop);
