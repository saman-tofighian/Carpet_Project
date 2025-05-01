export default function Seller() {
  return (
    <div className='w-full'>
      <div className='border-b md:border border-[#ADADAD] px-6 py-8 rounded-[12px]'>
        <div className='w-full flex justify-between'>
          <span className='text-[#000000] font-bold text-[18px]'>
            تعداد فرش :
          </span>
          <span className='text-[#000000] font-bold text-[18px]'>1</span>
        </div>
        <div className='w-full flex justify-between mt-4'>
          <span className='text-[#000000] font-bold text-[18px]'>
            مجموع سبد خرید :
          </span>
          <span className='text-[#000000] font-bold text-[18px]'>
            ۱۳/۵۰۰/۰۰۰
          </span>
        </div>
        <div className='w-full flex justify-between mt-4'>
          <span className='text-[#000000] font-bold text-[18px]'>
            ارسال توسط :
          </span>
          <span className='text-[#000000] font-bold text-[20px]'>
            ایرانی فرش
          </span>
        </div>
        <hr className='mt-4 text-[#ADADAD]' />
        <div className='w-full flex justify-center mt-7'>
          <button className='flex w-full py-3.5 border text-white bg-[#CB1B1B] rounded-[12px] justify-center items-center duration-700 ease-linear hover:bg-transparent hover:border  hover:text-[#CB1B1B] cursor-pointer'>
            سفارش و خرید
          </button>
        </div>
      </div>
    </div>
  );
}
