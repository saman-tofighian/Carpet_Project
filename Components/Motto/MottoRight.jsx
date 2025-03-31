import React from 'react'

export default function MottoRight() {
  return (
    <div className='col-span-5 mt-10'>
        <h1 className='font-bold text-[#121212] text-center text-[2.5rem]'>خرید راحت فرش،در <strong className='text-[#CB1B1B]'>ایرانی فرش</strong></h1>
        <p className='mt-4 text-[#121212] leading-[200%] text-center text-2xl font-medium'>
        با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده
        و از تنوع بی نظیر فرش ها لذت ببر.
        </p>
        <div className='w-full flex justify-evenly items-center mt-14'>
            <button className='outline-0 rounded-[12px] border border-[#CB1B1B] text-[#CB1B1B] p-3.5 bg-transparent cursor-pointer ease-in-out duration-700 hover:bg-[#cb1b1b] hover:text-white'>محصولات ویژه ایرانی فرش</button>
            <button className='outline-0 rounded-[12px] bg-[#CB1B1B] text-white p-3.5 cursor-pointer ease-in-out duration-700 hover:text-[#cb1b1b] hover:bg-transparent border border-[#CB1B1B]'>عضویت در باشگاه مشتریان</button>
        </div>
    </div>
  )
}
