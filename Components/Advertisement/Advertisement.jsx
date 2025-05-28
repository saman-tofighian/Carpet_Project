import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Advertisement() {
  return (
    <section className='mt-14 lg:mt-32 mb-20 py-16 w-full'>
      <div className='items-center gap-6 grid grid-cols-12 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl'>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='order-2 lg:order-1 col-span-12 lg:col-span-6 px-4 sm:px-8 text-center lg:text-right'
        >
          <motion.h2
            className='font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-13 tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            به باشگاه مشتریان ایرانی فرش بپیوندید
          </motion.h2>
          <motion.h3
            className='mt-3 lg:mt-7 font-semibold text-[#CB1B1B] text-2xl sm:text-3xl lg:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            تجربه‌ای از اصالت و امتیازات ویژه
          </motion.h3>
          <motion.p
            className='mx-auto lg:mx-0 mt-6 max-w-lg text-gray-700 text-base sm:text-lg lg:text-xl leading-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            با عضویت در باشگاه مشتریان ایرانی فرش، از تخفیف‌های انحصاری، ارسال
            رایگان و جدیدترین طرح‌های فرش‌های دستباف و مدرن زودتر از دیگران مطلع
            شوید. زیبایی هنر پارسی را با امتیازات ویژه به خانه ببرید.
          </motion.p>
          <motion.div
            className='flex justify-center lg:justify-start mt-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href='/'
              className='bg-transparent hover:bg-[#cb1b1b] px-10 py-3.5 border border-[#CB1B1B] rounded-[12px] w-fit font-bold text-[#CB1B1B] text-[18px] hover:text-white text-center duration-700 ease-linear'
              aria-label='عضویت در باشگاه مشتریان ایرانی فرش'
            >
              اکنون عضو شوید
            </Link>
          </motion.div>
        </motion.div>
        <motion.figure
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='flex justify-center order-1 lg:order-2 col-span-12 lg:col-span-6'
        >
          <img
            src='/advertisement.webp'
            alt='فرش ایرانی دستباف'
            className='rounded-xl w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-cover'
            loading='lazy'
          />
        </motion.figure>
      </div>
    </section>
  );
}
