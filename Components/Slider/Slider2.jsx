import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider2() {
  const [data] = useState([
    {
      id: 1,
      image: './slider5.png',
      alt: 'picSlider5',
      title: 'فرش ماشینی فرش ماهساره طرح آترینا زمینه آبی',
      price: '۱۳/۵۰۰/۰۰۰ تومان',
      delay: 0.5,
    },
    {
      id: 2,
      image: './slider6.png',
      alt: 'picSlider6',
      title: 'فرش ماشینی لوکس سهند زمینه سرمه ای ',
      price: '۲۳۳/۰۰۰ تومان',
      delay: 1,
    },
    {
      id: 3,
      image: './slider7.png',
      alt: 'picSlider7',
      title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
      price: '۶/۳۰۳/۰۰۰ تومان',
      delay: 1.5,
    },
    {
      id: 4,
      image: './slider8.png',
      alt: 'picSlider8',
      title: 'فرش ماشینی فرش مشهد طرح افشان زمینه کرم ',
      price: '۱۱/۶۰۰/۰۰۰ تومان',
      delay: 2,
    },
  ]);
  return (
    <section className='w-full mt-16'>
      <div className='w-full px-[6%]'>
        <div className='w-full flex items-center justify-between'>
          <h3 className='font-bold text-2xl text-[#121212]'>فرش های ماشینی</h3>
          <Link
            href='/'
            className='py-3 px-7 bg-transparent border border-[#CB1B1B] text-[#CB1B1B] rounded-[12px] flex justify-center items-center text-center gap-x-3 me-32 ease-linear duration-700 hover:bg-[#CB1B1B] hover:text-white'
          >
            مشاهده همه
            <FaArrowLeft />
          </Link>
        </div>
        <div className='w-full mt-12'>
          <Swiper spaceBetween={33} slidesPerView={4}>
            {data.map((val) => (
              <SwiperSlide
                key={val.id}
                className='border border-[#D9D9D9] rounded-[12px] p-4 max-w-[21.3%]'
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: val.delay, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <figure className='w-full flex justify-center'>
                    <img
                      src={val.image}
                      alt={val.alt}
                      className='w-[255px] h-[261px]'
                    />
                  </figure>
                  <div className='w-full px-6 mt-6'>
                    <p className='font-medium text-[18px] text-[#121212] leading-8'>
                      {val.title}
                    </p>
                  </div>
                  <div className='w-full flex justify-between px-6 mt-8'>
                    <span className='text-[#121212] font-medium text-[16px]'>
                      قیمت :
                    </span>
                    <span className='text-[#121212] font-medium text-[18px]'>
                      {val.price}
                    </span>
                  </div>
                  <div className='w-full flex justify-center px-6 mt-10'>
                    <Link
                      href='/'
                      className='text-[#CB1B1B] border border-[#CB1B1B] rounded-[12px] py-3 w-full text-center text-[15px] font-bold ease-linear duration-700 hover:text-white hover:bg-[#CB1B1B]'
                    >
                      مشاهده بیشتر
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Slider2;
