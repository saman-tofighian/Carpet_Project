'use client';

import ThreeDModel from '@/Components/Carpet3d/ThreeDModel';
import { models3D } from '@/Data';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

export default function ThreeDRugsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className='w-full px-4 md:px-12 py-16 mb-16'>
      <h2 className='text-center text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-14 leading-relaxed'>
        مشاهده همه مدل‌های فرش سه‌بعدی
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
        {models3D.map((model, index) => (
          <div
            key={index}
            className='bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'
          >
            <div className='aspect-square bg-[#f4f4f4]'>
              {isClient && (
                <Canvas camera={{ position: [2, 3, 10], fov: 30 }}>
                  <OrbitControls
                    enablePan={false}
                    makeDefault
                    autoRotate
                    minDistance={4}
                    maxDistance={35}
                  />
                  <Suspense fallback={null}>
                    <Stage intensity={1.2} shadows='contact' environment='city'>
                      <ThreeDModel modelPath={model.path} />
                    </Stage>
                  </Suspense>
                </Canvas>
              )}
            </div>

            <div className='p-6 flex flex-col justify-between space-y-4'>
              <h3 className='text-xl font-semibold text-center text-[#2B2B2B]'>
                {model.title}
              </h3>

              <p className='text-sm text-center text-gray-600 leading-7'>
                {model.desc}
              </p>

              <div className='flex justify-between items-center border-t pt-4 text-[#1F1F1F] font-medium text-[16px]'>
                <span>قیمت:</span>
                <span>{model.price.toLocaleString('fa', 'ir')} تومان</span>
              </div>

              <div className='pt-3 flex justify-center'>
                <button className='group relative inline-block px-12 py-2.5 border-2 border-[#CB1B1B] text-[#CB1B1B] rounded-md overflow-hidden transition-all duration-700 ease-linear cursor-pointer hover:bg-[#CB1B1B] hover:text-white'>
                  <span className='absolute inset-0 w-0 bg-[#CB1B1B] transition-all duration-500 ease-linear group-hover:w-full'></span>
                  <span className='relative z-10'>مشاهده جزئیات</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
