import { dataSlider2 } from '@/Data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider2() {
  const [data] = useState(dataSlider2);
  return (
    <section className='w-full mt-4 lg:mt-16'>
      <div className='w-full px-[6%]'>
        <div className='w-full flex items-center md:justify-between'>
          <h3 className='font-bold text-2xl text-[#121212]'>فرش های دستبافت</h3>
          <Link
            href='/products'
            className='py-3 px-7 bg-transparent border border-[#CB1B1B] text-[#CB1B1B] rounded-[12px]  justify-center items-center text-center gap-x-3  ease-linear duration-700 hover:bg-[#CB1B1B] hover:text-white hidden md:flex'
          >
            مشاهده همه
            <FaArrowLeft />
          </Link>
        </div>
        <div className='w-full mt-12'>
          <Swiper
            spaceBetween={33}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1450: { slidesPerView: 4 },
            }}
            className='mySwiper custom-pagination'
          >
            {data.map((val) => (
              <SwiperSlide
                key={val.id}
                className='border border-[#D9D9D9] rounded-[12px] p-4 '
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
                      loading='lazy'
                    />
                  </figure>
                  <div className='w-full px-6 md:px-0 xl:px-16 xl:text-center mt-6'>
                    <p className='font-medium text-[15px] md:text-[14px] md:text-nowrap lg:text-wrap lg:text-[18px] xl:text-[#121212] leading-8'>
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
                      href={`/products/${val.id}`}
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
