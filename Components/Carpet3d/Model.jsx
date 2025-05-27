import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';
import Model3d from './Model3d';

export default function Model() {
  return (
    <section className='mt-24 py-16 w-full'>
      <motion.div
        className='items-center gap-y-12 md:gap-x-3.5 lg:gap-y-0 grid grid-cols-12 mx-auto px-[6%] lg:px-12 max-w-7xl'
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className='order-2 lg:order-1 col-span-12 lg:col-span-6 text-center lg:text-right'>
          <motion.h2
            className='font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-13 tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            فرش‌های سه‌ بعدی، شاهکار هنر پارسی
          </motion.h2>
          <motion.h3
            className='mt-3 lg:mt-7 font-semibold text-[#CB1B1B] text-2xl sm:text-3xl lg:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ایرانی فرش، جلوه‌ای از اصالت
          </motion.h3>
          <motion.p
            className='mx-auto lg:mx-0 mt-6 max-w-lg text-gray-700 text-base sm:text-lg lg:text-xl leading-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            با فناوری سه‌بعدی، زیبایی و ظرافت فرش‌های ایرانی را از هر زاویه کاوش
            کنید. طرحی بی‌نظیر انتخاب کنید که داستان فرهنگ و هنر پارسی را در
            خانه شما روایت کند.
          </motion.p>
          <motion.div
            className='flex justify-center lg:justify-start mt-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href='/3dmodels'
              className='bg-transparent hover:bg-[#cb1b1b] px-8 py-3.5 border border-[#CB1B1B] rounded-[12px] w-fit font-bold text-[#CB1B1B] text-[18px] hover:text-white text-center duration-700 ease-linear'
              aria-label='کاوش مجموعه فرش‌های سه‌بعدی ایرانی'
            >
              کشف مجموعه فرش‌ها
            </Link>
          </motion.div>
        </div>
        <motion.div
          className='order-1 lg:order-2 col-span-12 lg:col-span-6 h-[400px] sm:h-[500px] lg:h-[700px]'
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Suspense
            fallback={
              <div className='flex justify-center items-center h-full text-gray-600 text-lg'>
                در حال بارگذاری شاهکار...
              </div>
            }
          >
            <Canvas
              className='bg-white shadow-2xl rounded-2xl w-full h-full'
              camera={{ position: [0, 2, 6], fov: 45 }}
              gl={{ antialias: true, alpha: false }}
              shadows
            >
              <Model3d />
            </Canvas>
          </Suspense>
        </motion.div>
      </motion.div>
    </section>
  );
}
