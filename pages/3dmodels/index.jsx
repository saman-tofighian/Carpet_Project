import ThreeDModel from '@/Components/Carpet3d/ThreeDModel';
import { models3D } from '@/Data';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};
export default function ThreeDRugsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className='mb-16 px-[6%] md:px-12 py-16 w-full'>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-[5rem] px-4 font-bold text-gray-900 text-2xl sm:text-5xl text-center leading-10 tracking-tight'
      >
        سفری به قلب هنر پارسی با فرش‌ های سه‌ بعدی
      </motion.h2>
      <div className='gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {models3D.map((model, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className='bg-white shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden transition-transform duration-300'
          >
            <div className='bg-[#f4f4f4] aspect-square'>
              {isClient && (
                <Canvas camera={{ position: [2, 3, 10], fov: 30 }}>
                  <Suspense fallback={null}>
                    <Stage environment='city' intensity={1.2} shadows='contact'>
                      <ThreeDModel modelPath={model.path} />
                    </Stage>
                    <OrbitControls
                      enablePan={false}
                      autoRotate
                      minDistance={4}
                      maxDistance={35}
                      makeDefault
                    />
                  </Suspense>
                </Canvas>
              )}
            </div>

            <div className='flex flex-col space-y-4 p-6'>
              <h3 className='font-semibold text-[#2B2B2B] text-2xl text-center'>
                {model.title}
              </h3>

              <p className='text-gray-600 text-sm text-center leading-7'>
                {model.desc}
              </p>

              <div className='flex justify-between items-center pt-4 border-t font-medium text-[#1F1F1F] text-[16px]'>
                <span>قیمت:</span>
                <span>{model.price.toLocaleString('fa-IR')} تومان</span>
              </div>

              <div className='flex justify-center pt-3'>
                <Link
                  href='/3dmodels'
                  className='bg-transparent hover:bg-[#cb1b1b] px-8 py-3.5 border border-[#CB1B1B] rounded-[12px] w-fit font-bold text-[#CB1B1B] text-[18px] hover:text-white text-center duration-700 ease-linear'
                  aria-label='کاوش مجموعه فرش‌های سه‌بعدی ایرانی'
                >
                  کشف مجموعه فرش‌ها
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
