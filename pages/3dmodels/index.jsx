import ThreeDModel from '@/Components/Carpet3d/ThreeDModel';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const models = [
  { title: 'فرش سه بعدی قدیمی', price: '۱۲,۵۰۰,۰۰۰', path: '/model1.glb' },
  { title: 'فرش سه‌بعدی قرمز', price: '۹,۸۰۰,۰۰۰', path: '/model2.glb' },
  { title: 'فرش سه‌بعدی فیروزه ای', price: '۱۵,۰۰۰,۰۰۰', path: '/model3.glb' },
];

export default function ThreeDRugsPage() {
  return (
    <section className='w-full px-4 md:px-10 py-10 grid grid-cols-12 gap-y-12 gap-x-6 bg-[#FAFAFA]'>
      <h2 className='col-span-12 text-center text-2xl md:text-3xl font-bold text-[#121212]'>
        مشاهده همه مدل‌های فرش ۳ بعدی
      </h2>

      {models.map((model, index) => (
        <div
          key={index}
          className='col-span-12 md:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-2xl p-4'
        >
          <h4 className='text-lg font-semibold mb-4 text-center'>
            {model.title}
          </h4>
          <div className='aspect-square bg-gray-100 rounded-lg overflow-hidden'>
            <Canvas camera={{ position: [2, 3, 10], fov: 30 }}>
              <OrbitControls />
              <Suspense fallback={null}>
                <Stage>
                  <ThreeDModel modelPath={model.path} />
                </Stage>
              </Suspense>
            </Canvas>
          </div>
          <div className='mt-5 flex justify-between items-center px-4'>
            <button className='px-4 py-2 rounded-md border border-[#CB1B1B] text-[#CB1B1B] hover:bg-[#CB1B1B] hover:text-white duration-300 cursor-pointer'>
              مشاهده جزئیات
            </button>
            <span className='text-[#121212] font-bold text-[18px]'>
              {model.price} تومان
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
