import { CiLogin } from 'react-icons/ci';
import { IoIosLogIn } from 'react-icons/io';
import { SlBasket } from 'react-icons/sl';
import { VscListSelection } from 'react-icons/vsc';
export default function NavTop() {
  return (
    <div className='w-full grid grid-cols-12'>
      {/* search */}
      <div className='col-span-7 xl:col-span-9 flex items-center gap-x-6'>
        <span className='text-2xl text-[#CB1B1B] font-bold order-2 lg:order-1'>
          ایـــرانی فرش
        </span>
        <input
          type='search'
          className='w-[439px] max-w-[439px] p-3 outline-0 border-0 rounded-[12px] text-[#717171] bg-[#EDEDED] hidden xl:flex order-2'
          placeholder='جستجو  فرش'
        />
        <button className='rounded-[8px] text-[#121212] p-3.5 bg-[#EDEDED] flex xl:hidden justify-center items-center text-center cursor-pointer font-extrabold order-1'>
          <VscListSelection size='1.4rem' />
        </button>
      </div>
      {/* buttons */}
      <div className='col-span-5 xl:col-span-3 flex items-center gap-x-4 justify-end'>
        <button className='border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5 flex justify-center items-center text-center cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white'>
          <SlBasket size='1.4rem' />
        </button>
        <button className='border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] px-3 py-2.5  flex xl:hidden justify-center items-center text-center cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white'>
          <IoIosLogIn size='1.4rem' />
        </button>
        <button className='px-5 py-2.5 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hidden xl:flex justify-center items-center text-center gap-2 cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white'>
          <CiLogin size='1.4rem' /> ورود / ثبت نام{' '}
        </button>
      </div>
    </div>
  );
}
