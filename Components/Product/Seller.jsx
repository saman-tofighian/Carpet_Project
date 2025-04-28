import { FaShop, FaStar } from 'react-icons/fa6';

export default function Seller() {
  return (
    <div className='w-full'>
      <div className='border border-[#ADADAD] px-4 py-8 rounded-[12px]'>
        <h6 className='text-[#121212] font-bold text-[16px]'>فروشنده</h6>
        <h5 className='text-[#212121] font-bold mt-4 flex gap-x-2 items-center'>
          <FaShop />
          شرکت فرش سهند
        </h5>
        <span className='text-[#121212] font-medium text-[14px] block mt-6'>
          عملکرد عالی
        </span>
        <span className='text-[#212121] font-bold text-[14px] mt-6 flex gap-x-1 items-center'>
          <FaStar className='text-[#FFB800]' />
          ۴.۶
        </span>
        <hr className='mt-3 text-[#ADADAD]' />
        <div className='w-full flex justify-between mt-6 items-center px-2'>
          <span className='text-[#353535] text-[16px] font-bold'>قیمت : </span>
          <span className='text-[#121212] font-medium text-[20px]'>
            ۱۳/۵۰۰/۰۰۰
          </span>
        </div>
        <div className='w-full flex justify-center mt-7'>
          <button className='flex w-full py-3.5 border text-white bg-[#CB1B1B] rounded-[12px] justify-center items-center duration-700 ease-linear hover:bg-transparent hover:border  hover:text-[#CB1B1B] cursor-pointer'>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
