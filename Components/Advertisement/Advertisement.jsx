import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Advertisement() {
  return (
    <section className='w-full mt-28 mb-10 lg:mt-40'>
      <div className='w-full grid grid-cols-12 px-[6%] items-center gap-y-14 lg:gap-y-0'>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='col-span-12 lg:col-span-6 text-center px-[15%] order-2 lg:order-1'
        >
          <h4 className='text-[#000000] font-medium text-[1.6rem] lg:text-[2.7rem]'>
            عضویت در باشگاه مشتریان
          </h4>
          <h4 className='text-[#CB1B1B] font-medium text-[1.6rem] lg:text-[2.7rem]'>
            {' '}
            ایـــرانی فرش
          </h4>
          <p className='text-[#121212] font-medium text-[1rem] lg:text-[1.3rem] mt-8 leading-11 text-wrap'>
            با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید
            و از امکان تحویل رایگان فرش های خود بهره مند شوید.
          </p>
          <div className='w-full flex justify-center mt-8'>
            <Link
              href='/'
              className='text-[#CB1B1B] border border-[#CB1B1B] bg-transparent w-full px-4 py-3.5 rounded-[12px] font-bold text-[18px] ease-linear duration-700 hover:bg-[#cb1b1b] hover:text-white'
            >
              ایجاد عضویت
            </Link>
          </div>
        </motion.div>
        <motion.figure
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className='col-span-12 lg:col-span-6 flex justify-center order-1 lg:order-2 pe-3 lg:pe-0'
        >
          <img
            src='./advertisement.webp'
            alt='carpet'
            className='w-[310px] h-[550px] md:w-[438px] md:h-[678px]'
            loading='lazy'
          />
        </motion.figure>
      </div>
    </section>
  );
}
