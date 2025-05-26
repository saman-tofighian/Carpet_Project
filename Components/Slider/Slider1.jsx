import { ProductData } from '@/Data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider1() {
  const filteredData = ProductData.filter(
    (item) => item.id >= 1 && item.id <= 4
  );
  return (
    <section className='mt-4 lg:mt-16 w-full'>
      <div className='px-[6%] w-full'>
        <div className='flex md:justify-between items-center w-full'>
          <h2 className='font-bold text-[#121212] text-2xl'>
            شاهکارهای دستبافت ایرانی
          </h2>
          <Link
            href='/products'
            className='hidden md:flex justify-center items-center gap-x-3 bg-transparent hover:bg-[#CB1B1B] px-7 py-3 border border-[#CB1B1B] rounded-[12px] text-[#CB1B1B] hover:text-white text-center duration-700 ease-linear'
          >
            کاوش مجموعه کامل
            <FaArrowLeft />
          </Link>
        </div>
        <div className='mt-12 w-full'>
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
            {filteredData.map((val) => (
              <SwiperSlide
                key={val.id}
                className='p-4 border border-[#D9D9D9] rounded-[12px]'
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: val.delay, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <figure className='flex justify-center w-full'>
                    <Image
                      src={val.image}
                      alt={val.alt}
                      width={255}
                      height={261}
                      className='w-auto h-auto'
                      priority={false}
                    />
                  </figure>
                  <div className='mt-6 px-3 md:px-0 w-full'>
                    <h2 className='font-medium text-[15px] md:text-[14px] xl:text-[#121212] xl:text-[17px] xl:text-wrap md:text-nowrap leading-8'>
                      {val.title}
                    </h2>
                  </div>
                  <div className='flex justify-between mt-8 px-6 w-full'>
                    <span className='font-medium text-[#121212] text-[16px]'>
                      قیمت :
                    </span>
                    <span className='font-medium text-[#121212] text-[18px]'>
                      {val.price.toLocaleString('fa', 'ir')} تومان
                    </span>
                  </div>
                  <div className='flex justify-center mt-10 px-6 w-full'>
                    <Link
                      href={`/products/${val.id}`}
                      className='hover:bg-[#CB1B1B] py-3 border border-[#CB1B1B] rounded-[12px] w-full font-bold text-[#CB1B1B] text-[15px] hover:text-white text-center duration-700 ease-linear'
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

export default Slider1;
