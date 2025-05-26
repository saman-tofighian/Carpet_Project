// import { Canvas } from '@react-three/fiber';
// import Link from 'next/link';
// import Model3d from './Model3d';

// export default function Model() {
//   return (
//     <section className='mt-20 py-7 w-full'>
//       <div className='items-center gap-y-22 lg:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
//         <div className='order-2 lg:order-2 col-span-12 lg:col-span-5 lg:mt-48 text-center'>
//           <h4 className='font-medium text-[#000000] text-[1.6rem] lg:text-[2.7rem]'>
//             فرش های 3 بعدی
//           </h4>
//           <h4 className='font-medium text-[#CB1B1B] text-[1.6rem] lg:text-[2.7rem]'>
//             {' '}
//             ایـــرانی فرش
//           </h4>
//           <p className='mt-8 font-medium text-[#121212] text-[1rem] lg:text-[1.3rem] text-wrap leading-11'>
//             شما می توانید مدل های مختلف فرش هارو 3 بعدی مشاهده کنید و با توجه به
//             مدل فرش دلخواه خود را خریداری کنید
//           </p>
//           <div className='flex justify-center mt-8 px-8 w-full'>
//             <Link
//               href='/3dmodels'
//               className='bg-transparent hover:bg-[#cb1b1b] px-4 py-3.5 border border-[#CB1B1B] rounded-[12px] w-full font-bold text-[#CB1B1B] text-[18px] hover:text-white duration-700 ease-linear'
//             >
//               فرش های بیشتر
//             </Link>
//           </div>
//         </div>
//         <div className='order-1 lg:order-2 col-span-12 lg:col-span-7 h-[400px] lg:h-[700px]'>
//           <Canvas className='w-full h-full'>
//             <Model3d />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense } from 'react';
import Model3d from './Model3d';

export default function Model() {
  return (
    <section className='mt-24 py-16 w-full'>
      <div className='items-center gap-8 grid grid-cols-12 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl'>
        <motion.div
          className='order-2 lg:order-1 col-span-12 lg:col-span-5 text-center lg:text-right'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className='font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-13 tracking-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            فرش‌های سه‌بعدی، شاهکار هنر پارسی
          </motion.h2>
          <motion.h3
            className='mt-3 font-semibold text-[#CB1B1B] text-2xl sm:text-3xl lg:text-4xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ایرانی فرش، جلوه‌ای از اصالت
          </motion.h3>
          <motion.p
            className='mx-auto lg:mx-0 mt-6 max-w-md text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            با فناوری سه‌بعدی، زیبایی و ظرافت فرش‌های ایرانی را از هر زاویه کاوش
            کنید. طرحی بی‌نظیر انتخاب کنید که داستان فرهنگ و هنر پارسی را در
            خانه شما روایت کند.
          </motion.p>
          <motion.div
            className='flex justify-center lg:justify-start mt-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href='/3dmodels'
              className='bg-transparent hover:bg-[#cb1b1b] px-4 py-3.5 border border-[#CB1B1B] rounded-[12px] w-full font-bold text-[#CB1B1B] text-[18px] hover:text-white text-center duration-700 ease-linear'
              aria-label='کاوش مجموعه فرش‌های سه‌بعدی ایرانی'
            >
              کشف مجموعه فرش‌ها
            </Link>
          </motion.div>
        </motion.div>
        <div className='order-1 lg:order-2 col-span-12 lg:col-span-7 h-[400px] sm:h-[500px] lg:h-[700px]'>
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
        </div>
      </div>
    </section>
  );
}
