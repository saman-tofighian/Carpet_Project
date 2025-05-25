import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import Model3d from './Model3d';

export default function Model() {
  return (
    <section className='w-full py-7 mt-20'>
      <div className='w-full grid grid-cols-12 px-[6%] items-center gap-y-22 lg:gap-y-0'>
        <div className='col-span-12 lg:col-span-5 text-center lg:mt-48 order-2 lg:order-2'>
          <h4 className='text-[#000000] font-medium text-[1.6rem] lg:text-[2.7rem]'>
            فرش های 3 بعدی
          </h4>
          <h4 className='text-[#CB1B1B] font-medium text-[1.6rem] lg:text-[2.7rem]'>
            {' '}
            ایـــرانی فرش
          </h4>
          <p className='text-[#121212] font-medium text-[1rem] lg:text-[1.3rem] mt-8 leading-11 text-wrap'>
            شما می توانید مدل های مختلف فرش هارو 3 بعدی مشاهده کنید و با توجه به
            مدل فرش دلخواه خود را خریداری کنید
          </p>
          <div className='w-full flex justify-center mt-8 px-8'>
            <Link
              href='/3dmodels'
              className='text-[#CB1B1B] border border-[#CB1B1B] bg-transparent w-full px-4 py-3.5 rounded-[12px] font-bold text-[18px] ease-linear duration-700 hover:bg-[#cb1b1b] hover:text-white'
            >
              فرش های بیشتر
            </Link>
          </div>
        </div>
        <div className='col-span-12 lg:col-span-7 h-[400px] lg:h-[700px] order-1 lg:order-2'>
          <Canvas className='w-full h-full'>
            <Model3d />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
