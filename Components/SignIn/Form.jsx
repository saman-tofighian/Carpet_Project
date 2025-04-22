import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLock, FaPhone } from 'react-icons/fa';
export default function Form() {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 px-10 bg-[#FFFFFF] lg:bg-transparent rounded-[20px] py-10 lg:py-0 shadow lg:shadow-none lg:mt-32'
    >
      <div className='w-full flex justify-center flex-col mb-9 mt-7'>
        <h2 className='text-[#CB1B1B] font-bold mb-6 text-3xl text-center'>
          ایـــرانی فرش
        </h2>
        <h4 className='text-[#9E1515] font-bold text-2xl text-center'>ورود</h4>
      </div>
      <form className='w-full flex flex-col justify-center gap-y-7'>
        <div className='relative w-full'>
          <input
            type='tel'
            id='mobile'
            placeholder='شماره موبایل'
            className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
          />
          <label
            htmlFor='mobile'
            className='absolute right-11 top-1/2 -translate-y-1/2 text-[#888] text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-[-1px] peer-focus:text-sm peer-focus:text-[#CB1B1B] bg-white px-1'
          >
            شماره موبایل
          </label>
          <FaPhone className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
        </div>
        <div className='relative w-full'>
          <input
            type='password'
            id='password'
            placeholder='رمز عبور'
            className='peer w-full py-3 pr-11 pl-4 rounded-[12px] border border-[#CBCBCB] placeholder-transparent focus:border-[#CB1B1B] focus:outline-none'
          />
          <label
            htmlFor='password'
            className='absolute right-11 top-1/2 -translate-y-1/2 text-[#888] text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-[-1px] peer-focus:text-sm peer-focus:text-[#CB1B1B] bg-white px-1'
          >
            رمز عبور
          </label>
          <FaLock className='absolute right-4 top-1/2 -translate-y-1/2 text-[#888]' />
        </div>
        <button
          className='bg-[#CB1B1B] text-white py-3.5 rounded-[12px] text-[18px] font-bold cursor-pointer ease-linear duration-700 hover:bg-green-700'
          type='submit'
        >
          ورود
        </button>
        <span className='font-medium text-[18px] md:text-[21px] text-black text-center'>
          ثبت نام نکرده اید؟همین حالا{' '}
          <Link
            href='/register'
            className='text-[#CB1B1B] font-bold ease-linear duration-700 hover:text-green-700'
          >
            عضو
          </Link>{' '}
          شوید
        </span>
      </form>
    </motion.div>
  );
}
